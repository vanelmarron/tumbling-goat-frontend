import "./FindUsPage.scss"

import Hero from "../../components/Hero/Hero"
import FindUs from "../../components/FindUs/FindUs"
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents"

function FindUsPage() {
  return (
    <main className="find-us-page">
      <Hero />
      <FindUs />
      <UpcomingEvents />
    </main>
  )
}

export default FindUsPage
