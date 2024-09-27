import { useEffect, useRef } from "react";
import TypeIt from "typeit";

import "./AboutNav.css";
import M1 from "../PhotoImages/9150897.jpg";
const About = () => {
  const typeItRef = useRef();

  useEffect(() => {
    typeItRef.current = new TypeIt(".ma-title", {
      strings: "",
      speed: 50,
      trigger: "loop",

      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      <div className="banners">
        <img src={M1} alt="background" />
        <p className="ma-title text-center">WELCOME TO QUANTUM INFO SOLUTION</p>
        <h6>
          It is a long established fact that a reader will be distracted by the
          readable content
        </h6>
        <br></br>
        <button>Hover me</button>
      </div>
      <div className="scroll-banner">
        <div className="container">
          <div className="box-1"></div>
        </div>
      </div>
      <div className="our text-center">
        <h1>Our Mission</h1>
        <p>
          At Quantum, our mission is to bridge the gap between technology and
          people by providing comprehensive and accessible IT training programs.
          We believe that learning should be hands-on and industry-relevant,
          which is why our courses are designed to offer real-world experience.
          By focusing on both basic and advanced skills, we help professionals
          and students alike stay ahead of the technological curve.
        </p>
        <h1>Our Mission</h1>
        <p>
          At Quantum, our mission is to bridge the gap between technology and
          people by providing comprehensive and accessible IT training programs.
          We believe that learning should be hands-on and industry-relevant,
          which is why our courses are designed to offer real-world experience.
          By focusing on both basic and advanced skills, we help professionals
          and students alike stay ahead of the technological curve.
        </p>
        <h1>Why Choose Quantum?</h1>
        <p>
          Expert Instructors: Our trainers are industry professionals with years
          of hands-on experience, ensuring that you learn the most up-to-date
          practices and technologies. Flexible Learning: Whether you're a
          student or a working professional, we offer flexible learning options
          to suit your schedule. Real-World Application: Our courses are
          designed to provide you with practical skills that you can immediately
          apply to your job or project.
        </p>
        <h1>Our Vision</h1>
        <p>
          We envision a future where everyone has the opportunity to harness the
          power of technology. By focusing on both foundational and specialized
          skills, Quantum is committed to fostering innovation and empowering
          the next generation of IT professionals.
        </p>
      </div>
    </>
  );
};

export default About;
