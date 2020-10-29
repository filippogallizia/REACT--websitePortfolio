import React from "react";
import Button from "@material-ui/core/Button";

function Cv() {
  return (
    <div className="page cv">
      <div className="headerTitle-container">
        <div className="color-ball cv"></div>
        <h2 class="Subtitle">Resume</h2>
      </div>
      <div className="mainContent-container">
        {""}
        <div>
          {" "}
          <h3>Work Experience</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
        </div>
        <div>
          <h3>Education</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
        </div>
      </div>

      <div className="skills">
        <h2 className="grid-1">Skills</h2>
        <div className="grid-2">
          <h4>Languages</h4>
          <ul className="skill-category">
            <li>html</li>
            <li>javascript(ES6)</li>
            <li>css, sass</li>
            <li>bash</li>
          </ul>
        </div>
        <div className="grid-3">
          <h4>Tooling</h4>
          <ul className="skill-category">
            <li>Figma</li>
            <li>Miro</li>
            <li>Slack</li>
            <li>Github</li>
            <li>Sublime</li>
            <li>Nano/vim</li>
            <li>Webpack</li>
            <li>Eslint</li>
          </ul>
        </div>
        <div className="grid-4">
          <h4>Frameworks</h4>
          <ul className="skill-category">
            <li>React</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Material-Ui</li>
            <li>Webflow</li>
          </ul>
        </div>
        <div className="grid-5">
          <h4>Infrastructure</h4>
          <ul className="skill-category">
            <li>DigitalOcean/ AWS</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <button class="download-button">Download Resume</button>
    </div>
  );
}

export default Cv;

// <div>
// <h2>Education</h2>
// <p>
//   Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's standard dummy text
//   ever since the 1500s, when an unknown printer took a galley of type
//   and scrambled it to make a type specimen book. It has survived not
//   only five centuries,{" "}
// </p>
// </div>
// </div>

// <h2>Skills</h2>
// <div className="skills">
// <div>
// <h3>Languages</h3>
// <ul className="skill-category">
//   <li>html</li>
//   <li>javascript(ES6)</li>
//   <li>css, sass</li>
//   <li>bash</li>
// </ul>
// </div>
// <div>
// <h3>Tooling</h3>
// <ul className="skill-category">
//   <li>Figma</li>
//   <li>Miro</li>
//   <li>Slack</li>
//   <li>Github</li>
//   <li>Sublime</li>
//   <li>Nano/vim</li>
//   <li>Webpack</li>
//   <li>Eslint</li>
// </ul>
// </div>
// <div>
// <h3>Frameworks</h3>
// <ul className="skill-category">
//   <li>React</li>
//   <li>Express</li>
//   <li>Bootstrap</li>
//   <li>Material-Ui</li>
//   <li>Webflow</li>
// </ul>
// </div>
// <div>
// <h3>Infrastructure</h3>
// <ul className="skill-category">
//   <li>DigitalOcean/ AWS</li>
//   <li>Docker</li>
//   <li>Git</li>
// </ul>
// </div>
// </div>
// </div>
