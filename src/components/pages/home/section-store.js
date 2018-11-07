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
                  <a className="nav-link active" data-toggle="tab" href="#tab-01" role="tab">Special</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-02" role="tab">Luxury</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-03" role="tab">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tab-04" role="tab">Women</a>
                </li>
              </ul>
            </div>

            <div className="col-xl-12">
              <div className="tab-content">
                <div id="tab-01" className="tab-pane show active">
                  <div className="products">
                    <div className="block-product-main" style={{ backgroundImage: `url(${require('@/assets/images/page-home/section-store/product-01.jpg')})` }}>
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
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item"><a class="page-link" href="#">1</a></li>
                      <li className="page-item"><a class="page-link" href="#">2</a></li>
                      <li className="page-item"><a class="page-link" href="#">3</a></li>
                    </ul>
                  </nav>
                </div>
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
