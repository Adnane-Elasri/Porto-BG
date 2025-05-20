import React from "react";
import './Header.css';


function Header() {
  return (
    <div className="head text-white d-flex flex-column justify-content-center align-items-start">
      <div className="container img-text">
        <h1>Katie Reed</h1>
        <p>Web Developer & Designer</p>
        <div className="mt-4">
          <button className="btn btn-outline-light" id="btn-me">CONTACT ME</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
