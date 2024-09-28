import React from "react";
import B1 from "../PhotoImages/w.mp4";
import "./Heads.css";

export default function App() {
  return (
    <div className="video-container">
      <div className="overlay">
        <video className="d-block w-100 " src={B1} autoPlay loop muted />
      </div>
      <div className="overlay-text">
        <h1>WELCOME</h1>
        <h1>QUANTUM INFO SOLUTION</h1>
      </div>
    </div>
  );
}
