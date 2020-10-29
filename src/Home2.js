import React from "react";
import MyImmage from "./immages/MyImmage2.jpg";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Home2() {
  return (
    <div className="page-home">
      <div className="gridParent-home">
        <div className="gridChild-home">
          <div className="headerTitle-container">
            <div className="color-ball home"></div>
            <h1 className="main-title">Hi, I am Filippo, </h1>
          </div>
          <h2>a Junior Web Developer.</h2>
          <p>
            HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
            MongoDB
          </p>
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

// className="image-container"

export default Home2;
