import React from "react";
import MyImmage from "./immages/MyImmage2.jpg";

function Home() {
  return (
    <div>
      <div className="page home">
        <div>
          <div className="headerTitle-container">
            <div className="color-ball home"></div>
            <h1>Hi, I am Filippo, </h1>
          </div>
          <h2>a Junior Web Developer.</h2>

          <p>
            HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
            MongoDB
          </p>

          <div className="social-links">
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
        <div className="image-container">
          <img className="profile-img" src={MyImmage} alt="me :)"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";

// class Home extends Component {
//   render() {
//     return (
//       <div style={{ width: "100%", margin: "auto" }}>
//         <Grid className="landing-grid">
//           <Cell col={12}>
//             <img
//               src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
//               alt="avatar"
//               className="avatar-img"
//             />

//             <div className="banner-text">
//               <h1>Full Stack Web Developer</h1>

//               <hr />

//               <p>
//                 HTML/CSS | Bootstrap | JavaScript | React | React Native |
//                 NodeJS | Express | MongoDB
//               </p>

//               <div className="social-links">
//                 {/* LinkedIn */}
//                 <a
//                   href="http://google.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fa fa-linkedin-square" aria-hidden="true" />
//                 </a>

//                 {/* Github */}
//                 <a
//                   href="https://github.com/filippogallizia"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fa fa-github-square" aria-hidden="true" />
//                 </a>

//                 {/* Freecodecamp */}
//                 <a
//                   href="http://google.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fa fa-free-code-camp" aria-hidden="true" />
//                 </a>

//                 {/* Youtube */}
//                 <a
//                   href="http://google.com"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <i className="fa fa-youtube-square" aria-hidden="true" />
//                 </a>
//               </div>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default Home;
