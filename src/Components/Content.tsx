import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function Content() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul className="content">
              <li>
                <Link
                  to={"/"}
                  style={{ fontSize: "22px", marginBottom: "10px" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  style={{ fontSize: "21px", marginBottom: "10px" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/projects"}
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={"/aboutme"}
                  style={{ fontSize: "22px", marginBottom: "0px" }}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
