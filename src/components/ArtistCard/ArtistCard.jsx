import "./ArtistCard.scss";
import React from "react";

import artist1 from "../../assets/images/artist-1.jpeg";
import artist2 from "../../assets/images/artist-2.jpeg";
import artist3 from "../../assets/images/artist-3.jpeg";
import artist4 from "../../assets/images/artist-4.jpeg";
import artist5 from "../../assets/images/artist-5.jpeg";
import shapeOne from "../../assets/images/forme_1.png"
import shapeTwo from "../../assets/images/forme2.png";

const images = [artist1, artist2, artist3, artist4, artist5];

function ArtistCard() {
  return (
    <section className="artist-card">
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
      <div className="artist-card__details">
        <h2>The Artist</h2>
        <h3>Introducing Marie-Ève: the artisan behind Tumbling Goat Pottery.</h3>
      <p className="artist-card__text">
        Originally from Amqui, Qc, she started making pottery shortly after moving to
        Revelstoke, BC in 2020. Pottery quickly became a passion for her since she likes every step of the process. While he professional background is in social work, she now dedicates most of her time to pottery.
      </p>
      <p className="artist-card__quote">
        “Transforming clay into objects that I use daily brings me pure
        happiness. My favorite thing about pottery is the clay itself. I enjoy
        the feeling on my hands and its colour at every stage of the process. I
        love to expose a lot of bare clay on the outside of my pieces and to
        keep the design simple in the goal to highlight the natural beauty of
        the raw material.”
      </p>
      </div>
    </section>
  );
}

export default ArtistCard;
