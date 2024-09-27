import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footers.css";
export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted custom-footer text-white">
      <section>
        <MDBContainer className="text-center text-md-start mt-5 text-white">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="white" icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="white" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color="white" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="white" icon="phone" className="me-3" /> + 01 234
                567 88
              </p>
              <p>
                <MDBIcon color="white" icon="print" className="me-3" /> + 01 234
                567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-white">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
