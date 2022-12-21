import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return(
    <div className = "app-wrapper">
      <Navbar/>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
};

export default App;