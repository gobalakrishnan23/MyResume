import { useState } from "react";
import { Link } from "react-router-dom";

function ContactMe() {
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
                  <Link to={"/projects"}>PROJECTS</Link>
                </li>
                <li>
                  <Link style={{ color: "#fc466b" }} to={"/contact"}>
                    CONTACT
                  </Link>
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
                <Link to={"/projects"}>PROJECTS</Link>
              </li>
              <li>
                <Link style={{ color: "#fc466b" }} to={"/contact"}>
                  CONTACT
                </Link>
              </li>
            </ul>
            <a href="gobalakrishnan.pdf">
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div className="container-4">
          <h1>CONTACT</h1>
          <div>
            <p>
              <nav style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  First Name:
                </label>
                <input
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder=" Enter your First Name"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Last Name:
                </label>
                <input
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Enter your Last Name"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Email:
                </label>
                <input
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Enter your Email"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Phone Number:
                </label>
                <input
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Enter your Phone Number"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Massage:
                </label>
                <textarea
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                    height: "100px",
                  }}
                  placeholder="Enter your Massage"
                ></textarea>
                <button
                  style={{
                    padding: "10px",
                    borderRadius: "30px",
                    backgroundColor: "#fc466b",
                    border: "none",
                    fontWeight: "500",
                    color: "#FFFFFF",
                    marginTop: "30px",
                  }}
                >
                  Send to{" "}
                </button>
              </nav>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
