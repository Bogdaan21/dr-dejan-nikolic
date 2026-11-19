import { contact, external } from "@/data/site";
import SectionTitle from "../ui/SectionTitle";

// Broj objava koje skripta /js/instagram.js učitava sa /api/instagram.
const POST_LIMIT = 8;

export default function InstagramFeed() {
  return (
    <div className="aali_tm_section" id="instagram" data-limit={POST_LIMIT}>
      <div className="clinic_instagram">
        <div className="container">
          <SectionTitle
            kicker="Instagram"
            title="Iz ordinacije"
            text={`Tretmani, rezultati i savjeti, uvijek najnovije objave sa profila ${contact.instagramHandle}.`}
            align="center"
            color="dark"
            className="wow fadeInUp"
            wowDuration="1s"
          />
          {/* Mjesta za objave dok se ne učitaju */}
          <ul className="ig_grid">
            {Array.from({ length: POST_LIMIT }, (_, index) => (
              <li key={index} className="ig_item ig_skeleton">
                <span></span>
              </li>
            ))}
          </ul>
          <div className="ig_more">
            <div className="aali_tm_button">
              <a href={contact.instagramHref} {...external}>
                <span>
                  {"Pratite na Instagramu "}
                  <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
