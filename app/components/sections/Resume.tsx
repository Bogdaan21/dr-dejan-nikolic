import { resumeColumns } from "@/data/template";
import SectionTitle from "../ui/SectionTitle";

// Sekcija iz šablona sa probnim sadržajem (engleski) i video pozadinom.
export default function Resume() {
  return (
    <div className="aali_tm_section" id="resume">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <SectionTitle
                kicker="Know More"
                title="My Resume"
                text="I enjoy every step of the design process, from discussion and collaboration to concept and execution"
                align="left"
                color="dark"
              />
              <div className="content_inner">
                <ul>
                  {resumeColumns.map((column) => (
                    <li key={column.heading} className={`wow ${column.animation}`} data-wow-duration="1s">
                      <h3 className="main_title">
                        <span>{column.heading}</span>
                      </h3>
                      <ul className="list">
                        {column.entries.map((entry) => (
                          <li key={entry.title}>
                            <div className="list_inner">
                              <span className="icon">
                                <img className="svg" src={column.icon} alt="" />
                              </span>
                              <div className="info">
                                <div className="left">
                                  <h3>{entry.title}</h3>
                                  <span>{entry.place}</span>
                                </div>
                                <div className="right">
                                  <span>{entry.period}</span>
                                </div>
                              </div>
                              <div className="text">
                                <p>{entry.text}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Pozadina: "video" ili "image" */}
        <div className="media" data-background-style="video">
          <div className="video jarallax" data-speed="0" data-jarallax-video="mp4:/video/dr-dejan-web.mp4"></div>
          <div className="image jarallax" data-speed="0" data-img-url="/img/about/2.jpg"></div>
          <span className="square moving_effect" data-direction="y" data-reverse="yes"></span>
        </div>
      </div>
    </div>
  );
}
