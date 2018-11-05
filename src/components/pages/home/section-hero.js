import React from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

function Section(props) {

  return (
    <section className="section-hero">
      <Slick>
        <div className="slick-item">
          <div className="slide"></div>
        </div>
        <div className="slick-item">
          <div className="slide"></div>
        </div>
        <div className="slick-item">
          <div className="slide"></div>
        </div>
      </Slick>
    </section>
  )
}

export default Section
