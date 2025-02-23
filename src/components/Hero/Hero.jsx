import "./Hero.scss";
import React from "react";
import {useLocation} from "react-router-dom"

import tumblingGoat from "../../assets/images/chevre_1.png";

function Hero() {

  const location = useLocation();

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__name">Tumbling Goat</h1>
        {location.pathname !== "/" && (
        <img src={tumblingGoat} alt="Tumbling Goat" className="hero__goat" />
        )}
      </div>
    </div>
  );
}

export default Hero;
