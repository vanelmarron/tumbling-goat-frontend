import React from 'react'
import "./HomePage.scss";

import Hero from "../../components/Hero/Hero"
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import GoatCard from "../../components/GoatCard/GoatCard"

function HomePage() {
  return (
    <div>
      <Hero />
      <ArtistCard />
      <GoatCard />
    </div>
  )
}

export default HomePage
