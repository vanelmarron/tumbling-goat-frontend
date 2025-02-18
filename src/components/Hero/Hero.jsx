import "./Hero.scss";
import React from "react";
import {useLocation} from "react-router-dom"

import tumblingGoat from "../../assets/images/chevre_1.png";
import shape from "../../assets/images/forme_1.png"

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
      <div className="hero__bottom">
        <p className="hero__text">
          Pottery crafted to be cherished,
          just as nature intended.
        </p>
        <img src={shape} alt="Shape" className="hero__shape" />
      </div>
    </div>
  );
}

export default Hero;
