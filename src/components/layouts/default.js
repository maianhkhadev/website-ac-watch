import React, { Component } from 'react'

import LayoutHeader from './default/header'
import LayoutFooter from './default/footer'
// SECTIONS
import SectionHero from '@/components/sections/section-hero'

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    let self = this

    return (
      <div className="layout-default">
        <LayoutHeader />

        <main className="main">

          <SectionHero />

          {self.props.children}
        </main>

        <LayoutFooter />
      </div>
    )
  }
}

export default Layout
