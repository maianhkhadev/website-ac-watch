import React from 'react'
import { Link } from 'react-router-dom'

function Section(props) {

  return (
    <section className="section-our-story section-scroll-down">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-content">
              <h2 className="section-title">Our Story</h2>
              <div className="line"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Link className="btn btn-cream" to="/our-story">Read more</Link>
            </div>
          </div>
          <div className="col-xl-6">
            <img className="im-01" src={ require('@/assets/images/page-home/section-our-story/im-01.jpg') } alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
