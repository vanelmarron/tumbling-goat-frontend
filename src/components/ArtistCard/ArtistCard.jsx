import "./ArtistCard.scss";
import { useState } from "react";

import artist1 from "../../assets/images/artist-1.jpeg";
import shapeOne from "../../assets/images/forme_1.png";
import shapeTwo from "../../assets/images/forme2.png";

function ArtistCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className={`artist-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="artist-card__inner">
        <div className="artist-card__front">
          <div className="artist-card__front-content">
          <div className="artist-card__profile">
            <img
              src={artist1}
              alt="Pottery artist working on a piece"
              className="artist-card__photo-artist"
            />
            <img
              src={shapeOne}
              alt="Pottery artist working on a piece"
              className="artist-card__shape-one"
            />
            <img
              src={shapeTwo}
              alt="Pottery artist working on a piece"
              className="artist-card__shape-two"
            />
          </div>
          <div className="artist-card__front-text">
          <h2 className="artist-card__learn-title">About me</h2>
          <p className="artist-card__intro">Introducing Marie-Ève</p>
          <button className="artist-card__learn-more">Learn More</button>
          </div>
          </div>
        </div>
        <div className="artist-card__back">
          <p className="artist-card__text">
            Originally from Amqui, Quebec, Marie-Ève started making pottery shortly after
            moving to Revelstoke, BC in 2020. Pottery quickly became a passion
            for her since she likes every step of the process. While he
            professional background is in social work, she now dedicates most of
            her time to pottery.
          </p>
          <p className="artist-card__quote">
            “Transforming clay into objects that I use daily brings me pure
            happiness. My favorite thing about pottery is the clay itself. I
            enjoy the feeling on my hands and its colour at every stage of the
            process. I love to expose a lot of bare clay on the outside of my
            pieces and to keep the design simple in the goal to highlight the
            natural beauty of the raw material.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistCard;
