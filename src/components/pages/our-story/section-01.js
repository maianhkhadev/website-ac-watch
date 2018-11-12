import React from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

function Section(props) {

  return (
    <section className="section-01">

      <div className="slick-container">
        <Slick>
          <div className="slide" style={{ backgroundImage: `url(${require('@/assets/images/page-our-story/section-01/slide-01.jpg')})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${require('@/assets/images/page-our-story/section-01/slide-01.jpg')})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${require('@/assets/images/page-our-story/section-01/slide-01.jpg')})` }}></div>
        </Slick>
      </div>

      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <h2 className="section-title">LOREM ipsum</h2>
              <div className="line"></div>
              <p className="section-describe">Lorem ipsum dolor sit amet</p>
              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore is are et dolore consectetur ncididunt ut adipiscing consectetur magna aliqua.</p>
              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore is are et dolore consectetur ncididunt ut adipiscing consectetur magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
