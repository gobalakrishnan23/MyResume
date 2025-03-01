import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [view, setView] = useState(false);

  function handleView() {
    setView(true);
  }
  function handleClose() {
    setView(false);
  }
  return (
    <>
      <div className="mixed-bg">
        {view && (
          <div style={{ position: "relative" }} className="box">
            <ul
              className="box1"
              style={{
                listStyleType: "none",
                position: "fixed",
                right: "0px",
                padding: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "30px" }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <img
                    src="WhatsApp Image 2025-02-28 at 7.00.46 PM.jpeg"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                    }}
                  ></img>
                  <p>GOBALAKRISHNAN</p>
                </div>
                <img
                  src="close.png"
                  onClick={handleClose}
                  style={{ width: "20px", height: "20px" }}
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop: "20px",
                }}
                className="link"
              >
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link style={{ color: "#fc466b" }} to={"/about"}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to={"/projects"}>PROJECTS</Link>
                </li>
                <li>
                  <Link to={"/contact"}>CONTACT</Link>
                </li>
              </div>
            </ul>
          </div>
        )}
        <div className="header">
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div className="container">
              <h1 className="name-1">GOBALA</h1>
              <h1 className="name-2">KRISHNAN</h1>
            </div>
            <div className="container-0">
              {view ? "" : <img src="hamburger.png" onClick={handleView}></img>}
            </div>
          </div>
          <div className="container-1">
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link style={{ color: "#fc466b" }} to={"/about"}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to={"/projects"}>PROJECTS</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
            <a href="https://github.com/gobalakrishnan23">
              <button>GitUp</button>
            </a>
          </div>
        </div>
        <div className="container-4">
          <h1>ABOUT</h1>
          <div>
            <p>
              Motivated and detail-oriented individual with a strong foundation
              in React.js, JavaScript, and front-end web development. Seeking an
              entry-level developer position to apply my skills in building
              dynamic and userfriendly web applications while expanding my
              technical expertise in a collaborative environment.
            </p>
          </div>
          <div>
            <nav>
              <h1>Technical Skills</h1>
              <ul>
                <li>
                  <span>Programming:</span> React.js, JavaScript, HTML5, CSS3
                </li>
                <li>
                  <span>Development Tools:</span> Visual Studio Code, Git,
                  GitHub
                </li>
                <li>
                  <span>Other Skills:</span> Problem-solving, Debugging,
                  Responsive Design
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
