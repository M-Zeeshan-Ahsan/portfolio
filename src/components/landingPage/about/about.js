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
              I am <strong>Muhammad Zeeshan Ahsan</strong>, a{" "}
              <strong>Full Stack MERN Developer</strong> with{" "}
              <strong>4+ years of experience</strong> building scalable,
              high-performance web applications. I specialize in developing
              pixel-perfect, responsive user interfaces from Figma designs and
              building secure, scalable backend solutions using the MERN stack.
            </p>

            <p>
              I have successfully delivered SaaS platforms, business management
              systems, AI-powered applications, and interactive 3D web
              experiences. I enjoy turning complex ideas into modern,
              user-friendly applications while focusing on clean architecture,
              performance optimization, and maintainable code.
            </p>

            <p>
              <strong>Frontend:</strong> React.js, Next.js, TypeScript,
              JavaScript, Three.js, React Three Fiber, Tailwind CSS, Material
              UI, SCSS
              <br />
              <strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose
              <br />
              <strong>State Management:</strong> Redux Toolkit, Context API
              <br />
              <strong>API & Tools:</strong> REST APIs, Axios, Git, GitHub,
              Postman
              <br />
              <strong>Deployment:</strong> Vercel, Netlify
            </p>

            <p>
              My recent work includes an{" "}
              <strong>AI-Powered Business Platform</strong>, an{" "}
              <strong>Interactive 3D Shoe Customization Platform</strong>, a{" "}
              <strong>Doctor Appointment Management System</strong>, and a{" "}
              <strong>MERN Task Management Application</strong>. I have worked
              closely with designers and backend teams, leading frontend
              development and delivering production-ready solutions.
            </p>

            <p>
              I hold a <strong>BS in Software Engineering</strong> from The
              University of Lahore and continuously explore modern technologies
              to build faster, scalable, and user-focused web applications.
            </p>

            <p>
              Feel free to reach out at{" "}
              <a href="mailto:zeeshanahsan8181@gmail.com">
                zeeshanahsan8181@gmail.com
              </a>{" "}
              or explore my portfolio at{" "}
              <a
                href="https://zeeshanahsan.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                zeeshanahsan.netlify.app
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
