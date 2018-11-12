import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {

  return (
    <footer className="footer">
      <div className="container">

        <div className="columns">
          <ul>
            <li className="text-white">
              <Link className="" to="/">Home</Link>
            </li>
            <li className="text-white">
              <Link className="" to="/our-story">Our Story</Link>
            </li>
            <li className="text-white">
              <Link className="" to="/about-us">About Us</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link className="" to="/store">Store</Link>
            </li>
            <li>
              <Link className="" to="/store?type=special">Special</Link>
            </li>
            <li>
              <Link className="" to="/store?type=luxury">Luxury</Link>
            </li>
            <li>
              <Link className="" to="/store?type=men">Men</Link>
            </li>
            <li>
              <Link className="" to="/store?type=women">Women</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link className="" to="/our-services">Services</Link>
            </li>
            <li>
              <Link className="" to="/our-services?type=service-01">Service 01</Link>
            </li>
            <li>
              <Link className="" to="/our-services?type=service-02">Service 02</Link>
            </li>
            <li>
              <Link className="" to="/our-services?type=service-03">Service 03</Link>
            </li>
            <li>
              <Link className="" to="/our-services?type=service-04">Service 04</Link>
            </li>
          </ul>

          <ul>
            <li>Contact</li>
            <li>Company: AC Works Co., Ltd</li>
            <li>Address: 17-17 Edo Hori 1 - chome Nishi - ku, Osaka - shi 550-0002</li>
            <li>Phone number: <a href="tel:0664472020">06-6447-2020</a></li>
            <li>Mail address: <a href="mailto:info@acworks.co.jp">info@acworks.co.jp</a></li>
          </ul>
        </div>

        <div className="socials">
          <a className="social" href="#">
            <img src={ require('@/assets/images/layout-default/footer/icon-01.png') } alt="" />
          </a>
          <a className="social" href="#">
            <img src={ require('@/assets/images/layout-default/footer/icon-02.png') } alt="" />
          </a>
          <a className="social" href="#">
            <img src={ require('@/assets/images/layout-default/footer/icon-03.png') } alt="" />
          </a>
          <a className="social" href="#">
            <img src={ require('@/assets/images/layout-default/footer/icon-04.png') } alt="" />
          </a>
        </div>

        <hr />

        <div className="row">
          <div className="col-xl-6">
            <span class="copyright">© 2018 ABC. All rights reserved.</span>
          </div>
          <div className="col-xl-6 text-right">
            <span className="brand">AC WATCH</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
