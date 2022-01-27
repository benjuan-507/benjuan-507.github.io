import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Projects from "./components/Projects"
import Socials from "./components/Socials"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return(
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Intro/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/socials" element={<Socials/>} />
    </Routes>       
  </Router>)
};

export default App;