import "./App.css";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import About from "./About";
import Home2 from "./Home2";
import Cv from "./Cv";
import Contacts from "./Contacts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      console.log(dimensions);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="container">
      <Router>
        <div>
          <nav className="nav">
            {dimensions.width > 916 && (
              <p className="email">galliziafilippo@gmail.com</p>
            )}

            <ul className="nav-container">
              <li className="nav-elem elem-1">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-elem elem-2">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-elem elem-3">
                <Link className="nav-link" to="/projects">
                  Project
                </Link>
              </li>
              <li className="nav-elem elem-4">
                <Link className="nav-link" to="/cv">
                  Curriculum
                </Link>
              </li>
              <li className="nav-elem elem-5">
                <Link className="nav-link" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/cv">
              <Cv />
            </Route>{" "}
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home2 /> <Projects />
              <Cv />
              <About /> <Contacts />{" "}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
