// import React from "react";
// import { Carousel } from "react-bootstrap";
// import B1 from "../Image/Blue and Red Modern Geometric Marketing Agency Business Banner (1).jpg";
// import B2 from "../Image/Blue and Red Modern Geometric Marketing Agency Business Banner (1).jpg";
// import B3 from "../Image/Blue and Red Modern Geometric Marketing Agency Business Banner (1).jpg";
// const H = () => {
//   return (
//     <>
//       <Carousel>
//         <Carousel.Item interval={10000}>
//           <img className="d-block w-100" src={B1} alt="First slide" />
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <img className="d-block w-100" src={B2} alt="Second slide" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src={B3} alt="Third slide" />
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// };
// export default H;
import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import {} from "mdb-react-ui-kit";
import B1 from "../PhotoImages/Blue and Red Modern Geometric Marketing Agency Business Banner (1).jpg";
export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={B1} className="d-block w-100" alt="..." />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          className="d-block w-100"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          className="d-block w-100"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
