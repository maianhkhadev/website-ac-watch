import React from 'react'

function Section(props) {

  return (
    <section className="section-about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="section-content">
              <div className="im-01"></div>
              <div className="im-02"></div>
              <div className="im-03"></div>
              <div className="im-04"></div>
              <div className="im-05"></div>
            </div>
          </div>
          <div className="col-xl-3 align-self-center">
            <div className="section-header">
              <h2 className="section-title">About Us</h2>
              <div className="line"></div>
              <p className="section-describe">Lorem ipsum dolor sit amet, eiusmod are tempor consectetur adipiscing elit</p>

              <a className="btn btn-cream">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section