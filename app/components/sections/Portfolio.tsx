import { Fragment } from "react";
import { portfolioFilters, portfolioItems, type PortfolioDetail } from "@/data/template";
import SectionTitle from "../ui/SectionTitle";

/** Sakriveni sadržaj koji skripta šablona prikazuje u popup prozoru. */
function PortfolioPopup({ detail }: { detail: PortfolioDetail }) {
  const share = ["/img/svg/social/facebook.svg", "/img/svg/social/twitter.svg", "/img/svg/social/instagram.svg"];

  return (
    <div className="hidden_content">
      <div className="popup_details">
        <div className="main_details">
          <div className="textbox">
            {detail.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span> <span>{detail.client}</span>
              </li>
              <li>
                <span className="first">Category</span>{" "}
                <span>
                  <a href="#">{detail.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span> <span>{detail.date}</span>
              </li>
              <li>
                <span className="first">Share</span>{" "}
                <ul className="share">
                  {share.map((icon, index) => (
                    <Fragment key={icon}>
                      {index > 0 ? " " : null}
                      <li>
                        <a href="#">
                          <img className="svg" src={icon} alt="" />
                        </a>
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            {detail.images.map((image) => (
              <li key={image}>
                <div className="list_inner">
                  <div className="my_image">
                    <img src="/img/thumbs/4-2.jpg" alt="" />
                    <div className="main" data-img-url={image}></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Sekcija iz šablona sa probnim sadržajem (engleski).
export default function Portfolio() {
  return (
    <div className="aali_tm_section clinic_portfolio_section" id="portfolio">
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <SectionTitle kicker="Selected works" title="Check my portfolio" align="center" color="light" />
          <div className="portfolio_filter">
            <ul>
              {portfolioFilters.map((item, index) => (
                <Fragment key={item.filter}>
                  {index > 0 ? " " : null}
                  <li>
                    <a href="#" className={index === 0 ? "current" : undefined} data-filter={item.filter}>
                      {item.label}
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {portfolioItems.map((item) => (
                <li key={item.title} className={item.category}>
                  <div className="list_inner">
                    <div className="image">
                      <img src="/img/thumbs/1-1.jpg" alt="" />
                      <div className="main" data-img-url={item.image}></div>
                    </div>
                    <div className="overlay"></div>
                    <img className="svg" src={item.icon} alt="" />
                    <div className="details">
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <a className={`aali_tm_full_link ${item.linkClassName}`} href={item.href}></a>
                    {item.detail ? <PortfolioPopup detail={item.detail} /> : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
