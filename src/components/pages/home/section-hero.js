import React from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

function Section(props) {

  return (
    <section className="section-hero">
      <Slick>
        <div className="slick-item">
          <div className="slide">
            <h2 className="slide-title">AC WATCH</h2>
            <p>LOREM IPSUM DOLOR SIT AMET</p>
            <button className="btn btn-outline-white">Read more</button>
            <button className="btn btn-cream">Shop now</button>
          </div>
        </div>
        <div className="slick-item">
          <div className="slide"></div>
        </div>
        <div className="slick-item">
          <div className="slide"></div>
        </div>
      </Slick>

      <button className="btn btn-outline-white btn-scroll-down">Down</button>
    </section>
  )
}

export default Section
