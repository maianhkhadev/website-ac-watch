import React, { Component } from 'react'
// LIBRARIES
import Slick from '@/components/libraries/slick'

class Section extends Component {

  constructor(props) {
    super(props)

    this.state = {
      options: {
        dots: true,
        arrows: false
      }
    }
  }

  render() {
    let self = this
    let state = self.state

    return (
      <section className="section-hero">
        <Slick options={ state.options }>
          <div className="slide">
            <div className="slide-content">
              <h1 className="page-title">AC WATCH</h1>
              <p className="page-describe">LOREM IPSUM DOLOR SIT AMET</p>
              <button className="btn btn-outline-white">Read more</button>
              <button className="btn btn-cream">Shop now</button>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <h1 className="page-title">AC WATCH</h1>
              <p className="page-describe">LOREM IPSUM DOLOR SIT AMET</p>
              <button className="btn btn-outline-white">Read more</button>
              <button className="btn btn-cream">Shop now</button>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <h1 className="page-title">AC WATCH</h1>
              <p className="page-describe">LOREM IPSUM DOLOR SIT AMET</p>
              <button className="btn btn-outline-white">Read more</button>
              <button className="btn btn-cream">Shop now</button>
            </div>
          </div>
        </Slick>

        <button className="btn btn-outline-white btn-scroll-down" onClick={(e) => { window.scrollIntoView(e, '.section-scroll-down') }}>
          <img className="icon" src={ require('@/assets/images/page-home/section-hero/icon-down.png') } alt="" />
        </button>
      </section>
    )
  }
}

export default Section
