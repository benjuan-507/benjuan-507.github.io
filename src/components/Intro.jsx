import React from 'react';
import "../styling/intro.css"

const Intro = () => {
  return <div className = "intro">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, my name is</h2>
            <h1 className = "i-name">Ben Juan </h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    {/* Add more titles in the future when I get more positions */}
                    <div className="i-title-item">Software Developer</div>
                </div>
            </div>
            <div className="i-description">
              I recently graduated from the University of Texas at Dallas in May 2022, where I got my Bachelors of Science in Computer Science. Currently I work as a software developer at Paycom. 
            </div>
        </div>
      </div>
            
      <div className="i-right">
        <img src = {require('../images/me.jpeg').default} alt = "" className = "i-image" />
      </div>
  </div>;
};

export default Intro;
