import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

function ContactMe() {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    phonenumber: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  function handleChange(e){
     setFormData({...formData,[e.target.name]:e.target.value});
  }

  function handleView() {
    setView(true);
  }
  function handleClose() {
    setView(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = 'service_uycbyzg';
    const templateID = 'template_zkm3p55';
    const publicKey = 'uyv1eY5hmi0X_IH3F';

    emailjs.send(serviceID, templateID, {
      from_name: formData.firstname+formData.lastname,
      reply_to: formData.email,
      message: formData.message,
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully!');
        setFormData({ firstname: '',lastname:'',phonenumber:'', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send email. Please try again.');
      });
  };
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
          <div style={{background:'transparent'}}>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <img src="call.png" style={{width:"30px",height:"30px"}}></img>
              <h4><a href="tel:+91 7695985963" style={{color:"#FFFFFF",fontWeight:"500"}}>+91 7695985963</a></h4>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <img src="mail.png" style={{width:"30px",height:"30px"}}></img>
              <h4><a href="mailto:a.g.gobalakrishnan@gmail.com" style={{color:"#FFFFFF",fontWeight:"500"}}>a.g.gobalakrishnan@gmail.com</a></h4>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <img src="whatsapp.png" style={{width:"30px",height:"30px"}}></img>
              <h4><a href=" https://wa.me/7695985963" style={{color:"#FFFFFF",fontWeight:"500"}}>WhatsApp</a></h4>
            </div>
          </div>
          <div>
            <p>
              <nav style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  First Name:
                </label>
                <input value={formData.firstname} onChange={handleChange} name="firstname"
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="First Name"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Last Name:
                </label>
                <input value={formData.lastname} onChange={handleChange} name="lastname"
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Last Name"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Email:
                </label>
                <input value={formData.email} onChange={handleChange} name="email"
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Email"
                  type="email"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Phone Number:
                </label>
                <input value={formData.phonenumber} onChange={handleChange} name="phonenumber"
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  placeholder="Phone Number"
                  type="number"
                ></input>
                <label style={{ color: "##fc466b", fontWeight: "500" }}>
                  Message:
                </label>
                <textarea value={formData.message} onChange={handleChange} name="message"
                  className="input"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid #FFFFFF",
                    marginTop: "10px",
                    marginBottom: "10px",
                    height: "100px",
                  }}
                  placeholder="Massage"
                ></textarea>
                <p style={{color:status ?'Green' :'red',textAlign:"center", fontSize:"20px"}}>{status}</p>
                <button onClick={sendEmail}
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
