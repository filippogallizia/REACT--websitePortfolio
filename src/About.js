import React from "react";
import MyImmage from "./immages/foto2_web.jpg";

function About() {
  return (
    <div className="page about">
      <div className="headerTitle-container">
        <div className="color-ball about"></div>
        <h2 className="Subtitle">About Me </h2>
      </div>
      <h3>Who am I?</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,{" "}
      </p>
      <h3>What do I do?</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,{" "}
      </p>
      <div className="about-img-container">
        <img className="about-img" src={MyImmage} alt="me :)"></img>
      </div>
    </div>
  );
}

export default About;
