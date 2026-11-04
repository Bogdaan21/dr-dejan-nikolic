import { NextResponse } from "next/server";

export const runtime = "nodejs";

/*
 * Instagram feed za sajt.
 *
 * Koristi zvanični "Instagram API with Instagram Login" (graph.instagram.com).
 * Potreban je INSTAGRAM_ACCESS_TOKEN u .env.local (uputstvo: INSTAGRAM.md).
 * Odgovor sa Instagrama se kešira 15 minuta, pa se nove objave pojave
 * na sajtu najkasnije 15 minuta nakon objavljivanja.
 */

const GRAPH_URL = "https://graph.instagram.com/me/media";
const REVALIDATE_SECONDS = 900;
const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 24;

type GraphChild = {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
};

type GraphMedia = {
  id: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
  children?: { data?: GraphChild[] };
};

export type InstagramPost = {
  id: string;
  type: "image" | "video" | "carousel";
  image: string;
  permalink: string;
  caption: string;
  timestamp: string | null;
};

function pickImage(item: GraphMedia): string | undefined {
  if (item.media_type === "VIDEO") return item.thumbnail_url;
  if (item.media_type === "CAROUSEL_ALBUM") {
    if (item.media_url && !item.media_url.includes(".mp4")) return item.media_url;
    const first = item.children?.data?.find((child) => child.media_url || child.thumbnail_url);
    if (first) return first.media_type === "VIDEO" ? first.thumbnail_url : first.media_url;
    return item.thumbnail_url;
  }
  return item.media_url;
}

function toPost(item: GraphMedia): InstagramPost | null {
  const image = pickImage(item);
  const permalink = item.permalink ?? "";

  if (!image || !/^https:\/\/(www\.)?instagram\.com\//.test(permalink)) {
    return null;
  }

  const caption = (item.caption ?? "").replace(/\s+/g, " ").trim();

  return {
    id: item.id,
    type: item.media_type === "VIDEO" ? "video" : item.media_type === "CAROUSEL_ALBUM" ? "carousel" : "image",
    image,
    permalink,
    caption: caption.length > 140 ? `${caption.slice(0, 137).trimEnd()}…` : caption,
    timestamp: item.timestamp ?? null,
  };
}

export async function GET(request: Request) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();

  if (!token) {
    return NextResponse.json({ posts: [], configured: false }, { status: 200 });
  }

  const requested = Number(new URL(request.url).searchParams.get("limit"));
  const limit = Number.isFinite(requested) && requested > 0 ? Math.min(requested, MAX_LIMIT) : DEFAULT_LIMIT;

  const url = new URL(GRAPH_URL);
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}",
  );
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  try {
    const response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });

    if (!response.ok) {
      const details = await response.text();
      console.error("Instagram API error", response.status, details.slice(0, 300));
      return NextResponse.json({ posts: [], configured: true, error: "instagram_unavailable" }, { status: 200 });
    }

    const payload = (await response.json()) as { data?: GraphMedia[] };
    const posts = (payload.data ?? []).map(toPost).filter((post): post is InstagramPost => post !== null);

    return NextResponse.json(
      { posts, configured: true },
      { headers: { "cache-control": `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=3600` } },
    );
  } catch (error) {
    console.error("Instagram feed failed", error);
    return NextResponse.json({ posts: [], configured: true, error: "instagram_unavailable" }, { status: 200 });
  }
}
