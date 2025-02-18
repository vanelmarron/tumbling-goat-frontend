import "./GoatCard.scss"
import React from 'react'

import tumblingGoat from "../../assets/images/chevre_1.png";
import spinningStars from "../../assets/images/etourdi.png";
import shape from "../../assets/images/forme2.png";

function GoatCard() {
  return (
    <section className="goat-card">
            <div className="goat-card__profile">
          <img
            src={tumblingGoat}
            alt="Image of a goat"
            className="goat-card__photo-goat"
          />
          <img
            src={shape}
            alt="Pottery artist working on a piece"
            className="goat-card__shape-two"
          />
          </div>
          <div className="goat-card__details">
            <h2>The Goat</h2>
            <h3>The story behind the "Tumbling Goat"</h3>
          <p className="goat-card__text">
          It all started with an epic hunting trip in the mountains near Revelstoke. Marie-Ève’s friend, Emile, was out solo when he spotted something wild, a mountain goat. His dream finally coming true. Deep breath. Steady aim. He took the shot. But that was just the beginning. Getting to the goat was no joke. 
          </p>
          <p className="goat-card__text">
          The climb was steep, the terrain brutal, but he pushed through. When he finally reached it, he thought the hard part was over. Nope. As he went to move the animal, he slid with the it. He had to let his prize go to save himself from a deadly fall from a 30 feet cliff. The goat tumbled. And tumbled. And kept tumbling, kicking off an avalanche. Within seconds, it was completely buried at the bottom of the cliff. Gone.  
          </p>
          <p className="goat-card__text">
          He searched desperately, but it was no use. Defeated, he headed home, haunted by the thought of a life taken but left behind. That wasn’t how this story was supposed to end. So, the next day, he rallied his crew. Armed with probes and sheer determination, they hiked back up, thinking that they would have to search for hours. Thankfully, after few minutes of team work, someone hit something solid. They had found it!  
          </p>
          <p className="goat-card__text">
          Cheers echoed through the valley as they pulled the goat from the snow. Every backpack was stuffed for the long trek home, carrying a share of its weight, and the respect they held for the life given. 
          </p>
          <p className="goat-card__quote">
          “When I was looking for a name for my pottery business, I knew that I wanted something that has nothing to do with pottery itself nor even my name and this is how Tumbling Goat Pottery came up. Much like the journey of that day, pottery is an art of patience, resilience, and deep connection to the earth. Each of my pieces carries this spirit - formed by hand, shaped by perseverance, and crafted to be cherished, just as nature intended.” 
          </p>
          </div>
        </section>
  )
}

export default GoatCard
