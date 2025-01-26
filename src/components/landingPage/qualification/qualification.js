import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = () => {
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
          <h1>Academic Qualifications</h1>
        </div>
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>Apr 2016 - May 2020</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Bachelor of Science in Software Engineering</h1>
              <p> The University of Lahore</p>
              <ul>
                <li>GPA: 3.51 out of 4.00 </li>
              </ul>
            </div>
          </div>
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>JUL 2021 - NOV 2021</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Internet of Things</h1>
              <p>Cisco Networking Academy</p>
              <ul>
                <li>
                  {" "}
                  Gained deep insights into the Internet of Things IoT and its
                  applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
