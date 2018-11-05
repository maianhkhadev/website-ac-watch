import React from 'react'

function Section(props) {

  return (
    <section className="section-contact-us">
      <div className="section-header">
        <h2 className="section-title">CONTACT US</h2>
        <div className="line"></div>
        <p className="section-describe">Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <form className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="form-group">
                <textarea className="form-control" placeholder="Place your text here"></textarea>
              </div>
              <button type="submit" className="btn btn-cream">Send</button>
            </div>
          </div>
        </div>
      </form>

      <div className="section-footer"></div>
    </section>
  )
}

export default Section
