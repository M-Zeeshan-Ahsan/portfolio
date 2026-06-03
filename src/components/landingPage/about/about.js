import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container-fluid about-section" id="about">
      <div className="container about-container">
        <div className="common-heading">
          <h1>About Me</h1>
          <p>
            A passionate Front-End Developer on a mission to craft seamless,
            high-performance web experiences — one component at a time.
          </p>
        </div>
        <div
          className="about-container-content animated-element"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="about-container-left d-none">
            <img src="" alt="img" />
          </div>
          <div className="about-container-right">
            <h1>
              Hi There <span>✌</span>
            </h1>
            <p>
              I am <strong>Muhammad Zeeshan Ahsan</strong>, a Front-End
              Developer with <strong>4+ years of experience</strong> building
              scalable, high-performance web applications using React.js and
              Next.js. I specialize in creating responsive, user-focused
              interfaces and delivering production-ready solutions in fast-paced
              environments.
            </p>
            <p>
              I have led development of scalable web applications, improved
              performance by 25–30% through memoization and code-splitting, and
              mentored a team of 4+ developers. I take pride in building
              reusable component libraries that accelerate delivery and maintain
              long-term codebase health.
            </p>
            <p>
              <strong>Technical Specifications:</strong>
              <br />
              <strong>Front-End Technologies:</strong> React.js, Next.js,
              TypeScript, JavaScript (ES6+)
              <br />
              <strong>State Management:</strong> Redux Toolkit, Context API
              <br />
              <strong>Styling:</strong> Tailwind CSS, Material UI, SCSS
              <br />
              <strong>Integration:</strong> REST APIs, Axios
              <br />
              <strong>Tools &amp; Concepts:</strong> Git, GitHub, Performance
              Optimization, Component-Based Architecture, Responsive Design
            </p>
            <p>
              Some of my notable projects include a{" "}
              <strong>3D Shoe Customization App</strong> built with Three.js and
              Next.js, <strong>Aurora</strong> — a clinical research negotiation
              SaaS platform, and a{" "}
              <strong>Hotel &amp; Staff Management System</strong> inspired by
              Connecteam. Each project reflects my focus on clean architecture,
              scalable state management, and exceptional user experience.
            </p>
            <p>
              I hold a <strong>BS in Software Engineering</strong> from The
              University of Lahore (2016–2020) and have previously worked at IT
              HUTS and Kings Digital Solution, where I sharpened my skills in
              responsive UI development and cross-team collaboration.
            </p>
            <p>
              Feel free to reach out at{" "}
              <a href="mailto:ahsansahi6@gmail.com">ahsansahi6@gmail.com</a> or
              explore my work at{" "}
              <a
                href="https://zeeshanahsan.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                zeeshanahsan.netlify.app
              </a>
              . I'm always open to exciting opportunities and collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
