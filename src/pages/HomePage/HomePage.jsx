import React from 'react'
import "./HomePage.scss";

import Hero from "../../components/Hero/Hero"
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import GoatCard from "../../components/GoatCard/GoatCard"
import ShopCard from "../../components/ShopCard/ShopCard"

function HomePage() {
  return (
    <div>
      <Hero />
      <ArtistCard />
      <ShopCard />
      <GoatCard />
    </div>
  )
}

export default HomePage
