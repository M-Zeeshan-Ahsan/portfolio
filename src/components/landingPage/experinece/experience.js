import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid experience-section">
      <div
        className="container experince container animated-element"
        data-aos="zoom-in"
      >
        <div className="common-heading">
          <h1>Working Experiences</h1>
        </div>
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>Apr 2022 - May 2026</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Senior Front-End Developer | Reactjs</h1>
              <p>Kodex Technologies</p>
              <ul>
                <li>
                  Led the development of responsive, user-friendly web
                  applications using React.js, TypeScript, Material UI, and
                  Next.js.
                </li>
                <li>
                  Implemented Redux Toolkit for efficient state management,
                  resulting in highly maintainable and scalable applications.
                </li>
                <li>
                  Delivered 30 web projects across industries such as
                  healthcare, retail, e-commerce, real estate, and social media,
                  with a focus on performance optimization.
                </li>
                <li>
                  Integrated third-party APIs and implemented features like
                  offline support, push notifications, and PWA capabilities.
                </li>
                <li>
                  Mentored a team of 20 front-end developers and designers,
                  ensuring high-quality deliverables and adherence to project
                  timelines.
                </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>JUL 2019 - OCT 2022</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Front-End Developer</h1>
              <p>IT HUTS</p>
              <ul>
                <li>
                  Developed and maintained web app interfaces using React.js,
                  TypeScript, HTML, CSS, and SCSS.
                </li>
                <li>
                  Collaborated with designers and back-end developers for
                  seamless integration and optimized front-end performance.
                </li>
                <li>
                  Utilized Bootstrap, React Bootstrap, and Material UI for
                  building responsive, visually appealing UIs.
                </li>
                <li>
                  Implemented build automation, testing, and CI/CD practices to
                  ensure scalability and high performance.
                </li>
                <li>
                  {" "}
                  Worked with CSS background, layouts, positioning, text,
                  border, margin, padding, Pseudo elements and behaviors
                </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>Apr 2021 - Aug 2021</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Frontend Developer</h1>
              <p>Kings Digital Solution</p>
              <ul>
                <li>
                  Developed modern, responsive UIs using HTML, CSS, JavaScript,
                  and Bootstrap.
                </li>
                <li>
                  Worked closely with back-end developers and designers to
                  integrate APIs and optimize UI/UX.
                </li>
                <li>
                  Participated in agile sprints, contributing to high-quality
                  deliverables in a fast-paced environment.
                </li>
                <li>
                  Conducted code reviews and ensured adherence to front-end best
                  practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
