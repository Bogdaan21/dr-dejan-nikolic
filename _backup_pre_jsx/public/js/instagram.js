/* Instagram sekcija: učitava objave sa /api/instagram i prikazuje ih u mreži. */
(function () {
	"use strict";

	var PROFILE_URL = "https://www.instagram.com/dr_dejan_nikolic/";

	function el(tag, className, text) {
		var node = document.createElement(tag);
		if (className) node.className = className;
		if (text) node.textContent = text;
		return node;
	}

	function icon(type) {
		var span = el("span", "ig_badge ig_badge_" + type);
		span.setAttribute("aria-hidden", "true");
		if (type === "video") {
			span.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.2-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z"/></svg>';
		} else {
			span.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm4-5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-1V8a3 3 0 0 0-3-3H6V4a2 2 0 0 1 2-2Z"/></svg>';
		}
		return span;
	}

	function renderPosts(grid, posts) {
		grid.innerHTML = "";
		posts.forEach(function (post) {
			var item = el("li", "ig_item");
			var link = el("a", "ig_link");
			link.href = post.permalink;
			link.target = "_blank";
			link.rel = "noopener noreferrer";
			link.setAttribute(
				"aria-label",
				(post.type === "video" ? "Pogledajte video na Instagramu" : "Pogledajte objavu na Instagramu") +
					(post.caption ? ": " + post.caption : "")
			);

			var img = el("img", "ig_image");
			img.src = post.image;
			img.alt = post.caption || "Objava dr Dejana Nikolića na Instagramu";
			img.loading = "lazy";
			img.decoding = "async";
			img.referrerPolicy = "no-referrer";
			img.onerror = function () { item.classList.add("ig_item_broken"); };
			link.appendChild(img);

			if (post.type !== "image") link.appendChild(icon(post.type));

			var overlay = el("span", "ig_overlay");
			overlay.appendChild(el("span", "ig_cta", post.type === "video" ? "Pogledajte video" : "Pogledajte objavu"));
			if (post.caption) overlay.appendChild(el("span", "ig_caption", post.caption));
			link.appendChild(overlay);

			item.appendChild(link);
			grid.appendChild(item);
		});
	}

	function renderFallback(grid) {
		grid.innerHTML = "";
		var item = el("li", "ig_empty");
		item.appendChild(el("p", "", "Najnovije objave, tretmani i rezultati nalaze se na Instagram profilu."));
		var link = el("a", "ig_empty_link", "@dr_dejan_nikolic");
		link.href = PROFILE_URL;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		item.appendChild(link);
		grid.appendChild(item);
	}

	function init() {
		var section = document.getElementById("instagram");
		if (!section || section.getAttribute("data-ig-loaded") === "yes") return;
		section.setAttribute("data-ig-loaded", "yes");

		var grid = section.querySelector(".ig_grid");
		var limit = parseInt(section.getAttribute("data-limit"), 10) || 8;

		fetch("/api/instagram?limit=" + limit, { headers: { accept: "application/json" } })
			.then(function (response) { return response.json(); })
			.then(function (data) {
				if (data && data.posts && data.posts.length) {
					renderPosts(grid, data.posts);
				} else {
					renderFallback(grid);
				}
			})
			.catch(function () { renderFallback(grid); });
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
