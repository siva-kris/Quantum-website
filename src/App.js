// import "./App.css";
// import React from "react";
// import Navbar from "../src/Compontend/Nav";
// import About from "../src/Header/AboutNav";
// import Contact from "../src/Header/ContactNav";
// import Course from "../src/Header/Course";
// import Ourserives from "../src/Header/Ourserives";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Compontend/Home";
// import Footer from "./Compontend/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/ContactNav" element={<Contact />} />
//           <Route path="/Course" element={<Course />} />
//           <Route path="/contact" element={<Ourserives />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import Navbar from "../src/Compontend/Nav";
import Contact from "../src/Header/ContactNav";
import Course from "../src/Header/Course";
import OurServices from "../src/Header/Ourserives";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Compontend/Home";
import Footer from "../src/Compontend/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import About from "../src/Header/AboutNav";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutNav" element={<About />} />
          <Route path="/ContactNav" element={<Contact />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Ourservices" element={<OurServices />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
