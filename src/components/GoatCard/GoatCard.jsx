import "./GoatCard.scss";
import { useState } from "react";

import tumblingGoat from "../../assets/images/chevre_1.png";
import backArrow from "../../assets/images/arrow_back_24.svg";
import forwardArrow from "../../assets/images/arrow_forward_24.svg";

function GoatCard() {
  const paragraphs = [
    "Discover the Story behind 'Tumbling Goat'",
    "It all started with an epic hunting trip in the mountains near Revelstoke. Marie-Ève’s friend, Emile, was out solo when he spotted something wild, a mountain goat. His dream finally coming true. Deep breath. Steady aim. He took the shot. But that was just the beginning. Getting to the goat was no joke.",
    "The climb was steep, the terrain brutal, but he pushed through. When he finally reached it, he thought the hard part was over. Nope. As he went to move the animal, he slid with it. He had to let his prize go to save himself from a deadly fall from a 30-foot cliff. The goat tumbled. And tumbled. And kept tumbling, kicking off an avalanche. Within seconds, it was completely buried at the bottom of the cliff. Gone.",
    "He searched desperately, but it was no use. Defeated, he headed home, haunted by the thought of a life taken but left behind. That wasn’t how this story was supposed to end. So, the next day, he rallied his crew. Armed with probes and sheer determination, they hiked back up, thinking that they would have to search for hours. Thankfully, after a few minutes of teamwork, someone hit something solid. They had found it!",
    "Cheers echoed through the valley as they pulled the goat from the snow. Every backpack was stuffed for the long trek home, carrying a share of its weight, and the respect they held for the life given.",
    "“When I was looking for a name for my pottery business, I knew that I wanted something that has nothing to do with pottery itself nor even my name and this is how Tumbling Goat Pottery came up. Much like the journey of that day, pottery is an art of patience, resilience, and deep connection to the earth. Each of my pieces carries this spirit - formed by hand, shaped by perseverance, and crafted to be cherished, just as nature intended.”",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="goat-card">
      <div className="goat-card__wrapper">
        <div className="goat-card__top">
          <img
            src={tumblingGoat}
            alt="Image of a goat"
            className="goat-card__photo-goat"
          />
          <h2>The Goat</h2>
        </div>
        <div className="goat-card__bottom">
          <p className="goat-card__text">{paragraphs[currentIndex]}</p>
        </div>
      </div>
      <div className="goat-card__pagination">
        <p>
          {currentIndex + 1} / {paragraphs.length}
        </p>
      </div>
      <div className="goat-card__actions">
        <img
          src={backArrow}
          alt="Back Arrow"
          className={`goat-card__back ${currentIndex === 0 ? "goat-card__back--disabled" : ""}`}
          onClick={currentIndex > 0 ? handlePrev : undefined}
        />
        <h3 className="goat-card__read">Read the story</h3>
        <img
          src={forwardArrow}
          alt="Forward Arrow"
          className={`goat-card__forward ${currentIndex === paragraphs.length - 1 ? "goat-card__forward--disabled" : ""}`}
          onClick={currentIndex < paragraphs.length - 1 ? handleNext : undefined}
        />
      </div>
    </section>
  );
}

export default GoatCard;
