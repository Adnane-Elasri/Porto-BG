import React from "react";
import './Navbar.css';
import KR from '../assets//kr.png'
import Twitter from '../assets/twitter.png'
import Linkdin from '../assets/linkedin.png'
import Face from '../assets/facebook.png'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={KR} width="150" alt="Logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-5">
            <li className="nav-item"><a className="nav-link text-dark" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">ABOUT</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">PROJECTS</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className="d-flex gap-3">
          <img src={Twitter} width="20" alt="LinkedIn" />
          <img src={Linkdin} width="20" alt="Facebook" />
          <img src={Face} width="20" alt="Twitter" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
