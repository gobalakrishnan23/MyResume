import { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
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
                style={{ display: "flex", alignItems: "center", gap: "30px",borderBottom:"1px solid black",paddingBottom:"20px" }}
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
                  <Link to={"/about"}>ABOUT</Link>
                </li>
                <li>
                  <Link style={{ color: "#fc466b" }} to={"/projects"}>
                    PROJECTS
                  </Link>
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
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li>
                <Link style={{ color: "#fc466b" }} to={"/projects"}>
                  PROJECTS
                </Link>
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
          <h1>PROJECTS</h1>
          <div>
            <p>
              <h2 style={{ color: "#fc466b", fontWeight: "500" }}>
                QR Code Generator
              </h2>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Built a QR Code generator with React.js to create and download
                  QR codes for text or URLs.
                </li>
                <li>Made it responsive for easy use on all devices.</li>
              </ul>
              <h2
                style={{
                  color: "#fc466b",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Advice App
              </h2>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Created an Advice App using React.js to fetch and display
                  random advice from a public API.
                </li>
                <li>
                  Designed a simple, user-friendly interface for smooth
                  interactions.
                </li>
              </ul>
              <h2
                style={{
                  color: "#fc466b",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Weather App
              </h2>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Developed a weather app in React.js to show real-time weather
                  data using a public API.
                </li>
                <li>
                  Added a search feature for location-based weather details with
                  a clean, responsive design.
                </li>
              </ul>
              <h2
                style={{
                  color: "#fc466b",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Monthly Calendar App
              </h2>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Built a monthly calendar app in React.js to view and select
                  dates.
                </li>
                <li>
                  Added features to display notes or events for selected dates.
                </li>
              </ul>
              <h2
                style={{
                  color: "#fc466b",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Currency Converter
              </h2>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Created a currency converter in React.js using a public API
                  for live exchange rates.
                </li>
                <li>
                  Included options for selecting base and target currencies with
                  instant results.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <nav>
              <h1>Additional Information</h1>
              <ul>
                <li>
                  Enthusiastic about learning new technologies and frameworks
                  like TypeScript, Node.js, and Redux
                </li>
                <li>
                  Open to freelance or part-time opportunities to gain hands-on
                  experience.
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
