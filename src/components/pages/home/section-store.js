import React from 'react'
import { Link } from 'react-router-dom'

function Section(props) {

  return (
    <section className="section-store">
      <div className="section-header">
        <h2 className="section-title">Store</h2>
        <div className="line"></div>
        <p className="section-describe">Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div className="container">
        <div className="section-content">
          <div className="block-product-main" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-01.jpg')})` }}>
            <div className="block-content">
              <h5 className="block-title">LOREM IPSUM 5678</h5>
              <p>Lorem ipsum dolor sit amet, is are you consectetur adipiscing elit, are is sed do eiusmod tempor incididunt</p>
              <Link className="btn btn-outline-cream" to="/store">Read more</Link>
            </div>
          </div>
          <div className="block-product" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-02.jpg')})` }}>
          </div>
          <div className="block-product" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-03.jpg')})` }}>
          </div>
          <div className="block-product" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-04.jpg')})` }}>
          </div>
          <div className="block-product" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-05.jpg')})` }}>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
