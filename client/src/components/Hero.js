import React from "react";
import homeImage from "../images/hero1.png";
export default function Hero() {
  return (
    <div id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
        </div>
        <div className="search">
         
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
}


  