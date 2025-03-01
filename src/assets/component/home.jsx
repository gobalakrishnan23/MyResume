import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [view, setView] = useState(false);
  const navigate = useNavigate("");

  function handleView() {
    setView(true);
  }
  function handleClose() {
    setView(false);
  }
  function handleGo(){
    navigate("/projects");
  }
  function handleContact(){
    navigate("/contact");
  }
  return (
    <>
      <div className="mixed-bg">
        {view && (
          <div style={{ position: "relative" }} className="box">
            <ul className="box1"
              style={{
                listStyleType: "none",
                position: "fixed",
                right: "0px",
                padding:"20px"
              }}
            >
              <div style={{display:"flex",alignItems:"center",gap:"30px",borderBottom:"1px solid black",paddingBottom:"20px"}}>
                <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                  <img src="WhatsApp Image 2025-02-28 at 7.00.46 PM.jpeg" style={{width:"30px",height:"30px",borderRadius:"100%",}}></img>
                  <p>GOBALAKRISHNAN</p>
                </div>
                <img
                src="close.png"
                onClick={handleClose}
                style={{ width: "20px", height: "20px",}}
              ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop:"20px"
                }}
                className="link"
              >
                <li>
                  <Link style={{ color: "#fc466b" }} to={"/"}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to={"/about"}>ABOUT</Link>
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
                <Link style={{ color: "#fc466b" }} to={"/"}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/projects"}>PROJECTS</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
            <a href="Gobalakrishnan-1_250301_100056.pdf">
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div className="full-container">
          <div className="container-2">
            <p>HELLO THERE, WELCOME TO MY SITE</p>
            <h1 >I'm Gobala Krishnan</h1>
            <h1 className="role">A Front-end Developer</h1>
            <h1>& Fresher</h1>
            <div>
              <button onClick={handleGo}>PROJECTS</button>
              <button onClick={handleContact}>CONTACT ME</button>
            </div>
          </div>
          <div className="container-3">
            <div>
              <img src="WhatsApp Image 2025-02-28 at 7.00.46 PM.jpeg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
