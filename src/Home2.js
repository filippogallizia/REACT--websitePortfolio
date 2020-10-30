import React from "react";
import MyImmage from "./immages/MyImmage2.jpg";

function Home2() {
  return (
    <div className="page-home">
      <div className="gridParent-home">
        <div className="gridChild-home">
          <div className="headerTitle-container home">
            <div className="color-ball home"></div>
            <h1 className="main-title">Hi, I'm Filippo, </h1>
          </div>
          <h3>a Full Stack Web Developer.</h3>
          <h4>
            HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
            MongoDB
          </h4>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <div className="gridParent-social-links">
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/filippo-gallizia-b38116141/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* Github */}
            <a
              href="https://github.com/filippogallizia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/GalliziaFilippo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="gridChild-home profile-img-container">
          <img className="profile-img" src={MyImmage} alt="me :)"></img>
        </div>
      </div>
    </div>
  );
}

export default Home2;
