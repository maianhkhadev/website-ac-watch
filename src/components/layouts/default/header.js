import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function NavItem(props) {

  return (
    <li className={ `nav-item ${ window.location.pathname === props.link ? 'active' : '' }` }>
      <Link className="nav-link" to={ props.link }>{ props.name }</Link>
    </li>
  )
}

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    let self = this

  }



  render() {
    let self = this

    return (
      <header className="header">

        <nav className="navbar navbar-expand-xl fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <NavItem link="/" name="Home" />
                <NavItem link="/our-story" name="Our story" />
                <NavItem link="/store" name="Store" />
              </ul>
            </div>

            <a className="navbar-brand" href="#">AC Watch</a>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <NavItem link="/our-services" name="Services" />
                <NavItem link="/about-us" name="About us" />
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={(e) => { window.scrollIntoView(e, '.section-contact-us') }}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    )
  }
}

export default Header
