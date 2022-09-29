import React from 'react';
import "../styling/intro.css"
import {Button} from 'react-bootstrap'
import{GithubFilled, LinkedinFilled} from "@ant-design/icons";


const Intro = () => {
  return <div className = "intro">
      <img src = {require('../images/me.JPG').default} alt = "" className = "i-image" />

      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, my name is</h2>
            <h1 className = "i-name">Ben Juan </h1>

              <div>
                  {/* Add more titles in the future when I get more positions */}
                  <div className="i-title">Software Developer</div>
              </div>

            <div className="i-description">
              I recently graduated from the University of Texas at Dallas in May 2022, where I got my Bachelors of Science in Computer Science. Currently I work as a software developer at Paycom. 
            </div>
          
            <Button variant = "resume" onClick = {openResume}>Résumé</Button>

        </div>

        <div className = "logos">
            <a
                className = "logo"
                href = "https://github.com/benjuan-507"
                target = "_blank"
                rel = "noopener noreferrer"
                >
                  <GithubFilled style = {{color: "#6666FF"}}/>
              </a>
            
            <a
              className = "logo"
              href = "https://www.linkedin.com/in/bengjuan/"
              target = "_blank"
              rel = "noopener noreferrer"
              >
                <LinkedinFilled style = {{color: "#6666FF"}}/>
            </a>
        </div>
      </div>
      

  </div>;  
};

function openResume(){
  window.open("https://github.com/benjuan-507/my_website/blob/main/public/BenJuan.pdf");
}

export default Intro