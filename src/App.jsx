import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/component/home";
import About from "./assets/component/about";
import Projects from "./assets/component/projects";
import ContactMe from "./assets/component/contactMe";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<ContactMe/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
