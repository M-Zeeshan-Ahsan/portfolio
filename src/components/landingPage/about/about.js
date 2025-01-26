import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import ProfileImage from "../../../assets/images/profile-img-two.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid about-section" id="about">
      <div className="container about-container ">
        <div className="common-heading">
          <h1>About Me</h1>
          <p>
            On a mission to be the world's No. 1 full-stack developer, I’m
            mastering React.js and front-end development to become the ultimate
            Web Development Hero!
          </p>
        </div>
        <div
          className="about-container-content animated-element"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="about-container-left d-none">
            <img src={ProfileImage} alt="img" />
          </div>
          <div className="about-container-right">
            <h1>
              Hi There<span>✌</span>
            </h1>
            <p>
              I am a senior front-end developer with over 3 years of extensive
              experience in building high-performance web applications using
              modern technologies. My expertise lies in creating dynamic and
              responsive user interfaces, ensuring seamless user experiences,
              and delivering scalable, maintainable solutions.
            </p>
            <p>
              As a Front-End Developer specializing in React.js, I excel in
              leveraging tools like Redux Toolkit, TypeScript, Vite, SCSS. My
              projects range from small-scale web apps to complex
              enterprise-level solutions, showcasing my adaptability and
              attention to detail.
            </p>
            <p>
              Technical Specifications:
              <br />
              <strong>Front-End Technologies:</strong> React.js, Next.js, Redux
              Toolkit, TypeScript, Vite, SCSS
              <br />
              <strong>UI/UX Development:</strong> Focused on creating intuitive
              and visually appealing user interfaces with robust accessibility
              and performance.
              <br />
              <strong>State Management:</strong> Advanced knowledge of Redux
              Toolkit, Context API, and React Query for efficient state
              handling.
            </p>

            <p>
              I pride myself on bridging the gap between technical and business
              needs by collaborating effectively with developers, designers,
              stakeholders, and product managers to ensure alignment and project
              success.
            </p>
            <p>
              Please contact me at any time when it is convenient for you to
              discuss further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
