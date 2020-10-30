import React from "react";
import Logo from "./immages/logo192.png";

function Projects() {
  return (
    <div className="page projects">
      <div className="headerTitle-container">
        <div className="color-ball project"></div>
        <h2 className="Subtitle">Selected works</h2>
      </div>
      <div className="project-grid">
        <div className="grid-child one">
          <h3>Surf Forecast Application</h3>
          <p>Design & Development 2020</p>
          <p>React | Node | Express | MongoDb</p>
          <img className="project-img" src={Logo} alt="ciao"></img>
        </div>
        <div className="grid-child two">
          <h3>Surf Forecast Application</h3>
          <p>Design & Development 2020</p>
          <p>React | Node | Express | MongoDb</p>
          <img src={Logo} alt="ciao"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
