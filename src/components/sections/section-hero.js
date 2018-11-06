import React from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

function Section(props) {

  return (
    <section className="section-hero">
      <Slick>
        <div className="slick-item"></div>
        <div className="slick-item"></div>
        <div className="slick-item"></div>
      </Slick>

      <div className="section-content">
        <h1 className="page-title">AC WATCH</h1>
        <p className="page-describe">LOREM IPSUM DOLOR SIT AMET</p>
        <button className="btn btn-outline-white">Read more</button>
        <button className="btn btn-cream">Shop now</button>
      </div>

      <button className="btn btn-outline-white btn-scroll-down">Down</button>
    </section>
  )
}

export default Section
