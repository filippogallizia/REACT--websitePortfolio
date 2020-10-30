import React from "react";

function Cv() {
  // const getCv = () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({msg: "send me cv"}),
  //   };
  //   fetch("http://localhost:3000/contacts", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => alert(data))
  //     .catch((error) => console.log(" data not send"));
  // };

  //
  // <Link to="/files/myfile.pdf" target="_blank" download>Download</Link>

  return (
    <div className="page cv">
      <div className="headerTitle-container">
        <div className="color-ball cv"></div>
        <h2 class="Subtitle">Resume</h2>
      </div>
      <div className="work-education-container">
        {""}
        <div className="work-education-child">
          {" "}
          <h3>Work Experience</h3>
          <h4>Jungle stage 2020</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <h4>Maramaho 2008</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <div className="work-education-child">
          <h3>Education</h3>
          <h4>[2018-2020] Front End Developer Course</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <h4>Universia' Degli Studi Di Milano - Facolty Of Law</h4>
          <p>Master degree</p>
          <h4>[2003-2008] Scientific High School</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>

      <div className="skills">
        <h3 className="grid-child-skills one">Skills</h3>
        <div className="grid-child-skills two">
          <h4 className="hfour-cv">Languages</h4>
          <ul className="skill-category">
            <li>html</li>
            <li>javascript(ES6)</li>
            <li>css, sass</li>
            <li>bash</li>
          </ul>
        </div>
        <div className="grid-child-skills three">
          <h4 className="hfour-cv">Tooling</h4>
          <ul className="skill-category tooling">
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
        <div className="grid-child-skills">
          <h4 className="hfour-cv">Frameworks</h4>
          <ul className="skill-category frameworks">
            <li>React</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Material-Ui</li>
            <li>Webflow</li>
          </ul>
        </div>
        <div className="grid-child-skills">
          <h4 className="hfour-cv">Infrastructure</h4>
          <ul className="skill-category">
            <li>DigitalOcean/ AWS</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <button className="download-button">Download Resume</button>
    </div>
  );
}

export default Cv;
