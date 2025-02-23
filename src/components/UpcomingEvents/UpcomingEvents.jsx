import "./UpcomingEvents.scss"
import React from 'react'
import {Link} from "react-router-dom";

import instagramIcon from "../../assets/images/instagram.svg"

function UpcomingEvents() {
  return (
    <section className="events">
      <h2 className="events__title">Upcoming Events</h2>
      <ul className="events__list">
        {/* Map through list of events in V2*/}
      </ul>
      <div className="events__empty">
      <p className="events__item">No events scheduled right now, but we’d love to keep you in the loop. </p>
        <p className="events__follow-us"><Link to="https://www.instagram.com/tumblinggoatpottery/" target="_blank" >Follow us </Link>for updates!</p>
        </div>
    </section>
  )
}

export default UpcomingEvents
