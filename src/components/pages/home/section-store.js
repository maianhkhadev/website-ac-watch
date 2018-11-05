import React from 'react'

function Section(props) {

  return (
    <section className="section-store">
      <div className="section-header">
        <h2 className="section-title">Store</h2>
        <div className="line"></div>
        <p className="section-describe">Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto">
              <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Luxury</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#contact" role="tab">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#contact" role="tab">Women</a>
                </li>
              </ul>
            </div>

            <div className="col-xl-12">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-footer"></div>
    </section>
  )
}

export default Section
