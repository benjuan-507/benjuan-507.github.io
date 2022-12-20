import React from 'react';
import "../styling/intro.css"
import {Button} from 'react-bootstrap'
import{GithubFilled, LinkedinFilled} from "@ant-design/icons";
import background from "../images/background.svg";

/*
@TODO: Allow mobile view with medai queries

*/


const Intro = () => {
  return <div className = "intro">
      <img src = {require('../images/me.JPG').default} alt = "" className = "i-image" />

      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, my name is Ben Juan!</h2>
            <div className="i-title">Software Developer based in Plano, TX</div>
            <div className="i-description">
              <p>I recently graduated from the University of Texas at Dallas in May 2022, where I got my Bachelors of Science in Computer Science. Currently I work as a software developer at Paycom. </p>
            </div>
        </div>

        <img className = "background-image" src = {background} alt = "background"/>

        {/* <div className = "logos">
            <a
                className = "logo"
                href = "https://github.com/benjuan-507"
                target = "_blank"
                rel = "noopener noreferrer"
                >
                  <GithubFilled style = {{color: "#8BD3FF"}}/>
              </a>
            
            <a
              className = "logo"
              href = "https://www.linkedin.com/in/bengjuan/"
              target = "_blank"
              rel = "noopener noreferrer"
              >
                <LinkedinFilled style = {{color: "#8BD3FF"}}/>
            </a>
        </div> */}
      </div>
  </div>;  
};


export default Intro