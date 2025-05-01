import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar_header">
      <div className="container-fluid page-scroll">
        <a className="navbar-brand Logo" href="#home">HARRY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto header_nav">
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={500}>
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true} duration={500}>
              Services
              </Link>
            </li>
            <li className="nav-item">
               <Link to="portfolio" spy={true} smooth={true} duration={500}>
               Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="team" spy={true} smooth={true} duration={500}>
               Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
              </Link>
            </li>
          </ul>
          </div>
          </div>
        </nav>
    </div>
  )
}

export default navigation
