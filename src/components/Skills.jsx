import React from "react";
import './Skills.css';


function Skills() {
  return (
    <div className="hero">
      <div className="skills">
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi dicta delectus beatae temporibus.
          A quibusdam quasi inventore amet. Cupiditate exercitationem a nihil inventore ex quidem labore sit rem alias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero commodi deleniti ex! Voluptatum vitae nostrum repellendus voluptates distinctio,
          soluta, magnam quidem sint fuga accusamus laborum laudantium excepturi dolorem iste.
        </p>
      </div>
      <div className="container-two">
        <div className="focus-section">
          <h2>MY FOCUS</h2>
          <hr />
          <ul>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </div>
        <div className="bars">
          <div className="progress-wrapper">
            {[
              { label: "HTML", fillClass: "html-fill" },
              { label: "CSS", fillClass: "css-fill" },
              { label: "JavaScript", fillClass: "js-fill" },
              { label: "React", fillClass: "react-fill" },
              { label: "Photoshop", fillClass: "ps-fill" },
              { label: "Adobe XD", fillClass: "xd-fill" },
              { label: "Node.js", fillClass: "node-fill" },
              { label: "WordPress", fillClass: "wp-fill" },
            ].map(({ label, fillClass }) => (
              <div className="progress-container" key={label}>
                <div className="label">{label}</div>
                <div className="progress-bar">
                  <div className={`progress-fill ${fillClass}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
