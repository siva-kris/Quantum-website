// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import M from "../PhotoImages/Group 64.jpg";
// import "./About.css";
// const A = () => {
//   return (
//     <>
//       <div className="set-size " data-aos="zoom-in-up">
//         <h1>ABOUT</h1>
//       </div>
//       <Container>
//         <Row>
//           <Col sm={8}>
//             <div data-aos="fade-right">
//               <img src={M} alt="p" style={{ width: "95%", height: "auto" }} />
//             </div>
//           </Col>

//           <Col sm={4}>
//             <div className="hhh">
//               <h3 className="s" data-aos="zoom-in-up">
//                 Quantum technology IT training and IT solution
//               </h3>
//               <div data-aos="zoom-in-up">
//                 {" "}
//                 <p>
//                   Welcome to Quantum, your go-to destination for innovative IT
//                   solutions and professional training services. We specialize in
//                   equipping both individuals and businesses with the tools and
//                   knowledge needed to thrive in today’s fast-paced digital
//                   world.
//                 </p>
//               </div>
//               <div data-aos="zoom-in-up">
//                 <p>
//                   Whether you're looking to upgrade your team's technical skills
//                   or explore cutting-edge technologies, Quantum offers tailored
//                   solutions to meet your needs.
//                 </p>
//               </div>
//               <div data-aos="zoom-in-up">
//                 <h3>Our Mission</h3>
//               </div>
//               <div data-aos="zoom-in-up">
//                 <p>
//                   At Quantum, our mission is to bridge the gap between
//                   technology and people by providing comprehensive and
//                   accessible IT training programs.
//                 </p>
//               </div>
//               <div data-aos="zoom-in-up">
//                 <p>
//                   We believe that learning should be hands-on and
//                   industry-relevant, which is why our courses are designed to
//                   offer real-world experience
//                 </p>
//               </div>
//               <div data-aos="zoom-in-up">
//                 <p>
//                   By focusing on both basic and advanced skills, we help
//                   professionals and students alike stay ahead of the
//                   technological curve.
//                 </p>
//                 <h3>Why Choose Quantum?</h3>
//                 <p>
//                   Expert Instructors: Our trainers are industry professionals
//                   with years of hands-on experience, ensuring that you learn the
//                   most up-to-date practices and technologies.
//                 </p>
//                 <p>
//                   Flexible Learning: Whether you're a student or a working
//                   professional,
//                 </p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default A;
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import M from "../PhotoImages/Group 64.jpg";
import "./About.css";

const A = () => {
  return (
    <>
      <section className="about-section">
        <div className="title-nameS text-center">
          <div data-aos="fade-right">
            <h1>ABOUT</h1>
            <div className="line-bar"></div>
          </div>
        </div>

        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6}>
              <div data-aos="fade-right">
                <img src={M} alt="About Quantum" className="about-image" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="about-text" data-aos="fade-left">
                <h3>Quantum Technology IT Training and Solutions</h3>
                <p>
                  Welcome to Quantum, your go-to destination for innovative IT
                  solutions and professional training services. We specialize in
                  equipping both individuals and businesses with the tools and
                  knowledge needed to thrive in today’s fast-paced digital
                  world.
                </p>
                <p>
                  Whether you're looking to upgrade your team's technical skills
                  or explore cutting-edge technologies, Quantum offers tailored
                  solutions to meet your needs.
                </p>
                <button className="button2">Contact Us</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default A;
