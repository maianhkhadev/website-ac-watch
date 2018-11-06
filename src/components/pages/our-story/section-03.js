import React from 'react'

function Section(props) {

  return (
    <section className="section-03">
      <div className="container">
        <div className="section-header">
          <div className="row">
            <div className="col-xl-6 mx-auto">
              <h2 className="section-title">LOREM IPSUM DOLOR</h2>
              <div className="line"></div>
              <p className="section-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore is are et dolore consectetur ncididunt ut adipiscing consectetur labore is are et dolore consectetur ncididunt  magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xl-6">
              <img src={ require('@/assets/images/page-our-story/section-03/im-01.jpg') } alt="" />
            </div>
            <div className="col-xl-6">
              <img src={ require('@/assets/images/page-our-story/section-03/im-02.jpg') } alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
