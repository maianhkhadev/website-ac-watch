import React from 'react'
import { Link } from 'react-router-dom'

function Section(props) {

  return (
    <section className="section-our-services">
      <div className="section-header">
        <div className="flex-content">
          <h2 className="section-title">Our Services</h2>
          <div className="line"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Link className="btn btn-outline-cream" to="/our-services">Read more</Link>
        </div>
      </div>

      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="block-service">
                <img className="icon" src={ require('@/assets/images/page-home/section-our-services/icon-01.png') } alt="" />
                <h5 className="block-title">LOREM ipsum</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="block-service">
                <img className="icon" src={ require('@/assets/images/page-home/section-our-services/icon-02.png') } alt="" />
                <h5 className="block-title">LOREM ipsum</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <hr />
            </div>
            <div className="col-xl-3">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="block-service">
                <img className="icon" src={ require('@/assets/images/page-home/section-our-services/icon-04.png') } alt="" />
                <h5 className="block-title">LOREM ipsum</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="block-service">
                <img className="icon" src={ require('@/assets/images/page-home/section-our-services/icon-03.png') } alt="" />
                <h5 className="block-title">LOREM ipsum</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
