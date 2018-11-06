import React, { Component } from 'react'
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
        <header className="header">
        </header>

        <main className="main">
        
          <SectionHero />

          {self.props.children}
        </main>

        <footer className="footer">
        </footer>
      </div>
    )
  }
}

export default Layout
