import React from "react";
import Logo from "./immages/logo192.png";

function Projects() {
  return (
    <div className="page projects">
      <div className="headerTitle-container">
        <div className="color-ball project"></div>
        <h2 class="Subtitle">Selected works</h2>
      </div>
      <div className="project-grid">
        <div className="grid-child">
          <h3>Surf Forecast Application</h3>
          <p>Design & Development 2020</p>
          <p>React | Node | Express | MongoDb</p>
          <img className="project-img" src={Logo} alt="ciao"></img>
        </div>
        <div className="grid-child">
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

// import React from "react";
// import Button from "@material-ui/core/Button";

// function Projects() {
//   return (
//     <div className="page projects">
//       <div className="headerTitle-container">
//         <div className="color-ball project"></div>
//         <h1>Selected Works </h1>
//       </div>
//       <Button variant="contained" color>
//         hello world
//       </Button>
//     </div>
//   );
// }

// export default Projects;
