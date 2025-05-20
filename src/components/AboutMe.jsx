import React from "react";
import './AboutMe.css';


function AboutMe() {
  return (
    <div className="about-me">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae neque commodi vel, doloribus tenetur beatae consequuntur.
        Iure animi nisi ex! Enim, expedita temporibus! Optio maiores minima,
        veritatis repellat tenetur ea. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ipsam enim dignissimos quos incidunt distinctio veniam facilis
        sed eaque saepe necessitatibus deserunt suscipit nobis consequuntur porro quam, ratione
        culpa debitis recusandae?
      </p>
      <div className="btn-download">
        <button id="btn-down">Download Resume</button>
      </div>
    </div>
  );
}

export default AboutMe;
