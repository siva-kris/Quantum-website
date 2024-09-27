import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Serives.css";
function ServicesSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lusqsztk.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="parallax">
        <div className="title-name text-center">OUR SERVICES</div>
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <div data-aos="flip-left">
                <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      01
                    </p>
                  </div>
                  <div className="w-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/nmguxqka.json"
                      trigger="loop"
                      colors="primary:#ee66aa,secondary:#66a1ee"
                      style={{ width: "70px", height: "70px" }}
                    ></lord-icon>
                  </div>
                  <h1 className="font-bold text-xl">UI / UX Creative Design</h1>
                  <p className="text-sm text-zinc-500 leading-6">
                    We specialize in crafting intuitive and visually appealing
                    interfaces that deliver seamless user experiences.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className="mb-4">
              <div data-aos="flip-left">
                <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      02
                    </p>
                  </div>
                  <div className="w-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/dqrpfjei.json"
                      trigger="loop"
                      style={{ width: "70px", height: "70px" }}
                    ></lord-icon>
                  </div>
                  <h1 className="font-bold text-xl">Web Development</h1>
                  <p className="text-sm text-zinc-500 leading-6">
                    From concept to deployment, we provide comprehensive web
                    development services that meet modern industry standards.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="mb-4">
              <div data-aos="flip-left">
                <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      03
                    </p>
                  </div>
                  <div className="w-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/ajfmgpbq.json"
                      trigger="loop"
                      colors="primary:#ee66aa,secondary:#66a1ee"
                      style={{ width: "70px", height: "70px" }}
                    ></lord-icon>
                  </div>
                  <h1 className="font-bold text-xl">
                    Digital Marketing Services
                  </h1>
                  <p className="text-sm text-zinc-500 leading-6">
                    From strategy to execution, our digital marketing services
                    are designed to enhance your online presence and drive
                    measurable results.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className="mb-4">
              <div data-aos="flip-left">
                <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      04
                    </p>
                  </div>
                  <div className="w-12">
                    <lord-icon
                      src="https://cdn.lordicon.com/ffoywhrm.json"
                      trigger="loop"
                      colors="primary:#ee66aa,secondary:#66a1ee"
                      style={{ width: "70px", height: "70px" }}
                    ></lord-icon>
                  </div>
                  <h1 className="font-bold text-xl">Application Services</h1>
                  <p className="text-sm text-zinc-500 leading-6">
                    From initial design to final launch, we offer end-to-end
                    application development services that align with the latest
                    industry standards.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ServicesSection;
