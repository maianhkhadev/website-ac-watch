import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <header className="header">

      <nav className="navbar navbar-expand-xl fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our-story">Our story</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Store</Link>
              </li>
            </ul>
          </div>

          <a className="navbar-brand" href="#">AC Watch</a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/our-services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header
