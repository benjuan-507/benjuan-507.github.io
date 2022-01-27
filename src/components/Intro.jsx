import React from 'react';
import "../styling/intro.css"
import Me from "../images/me.JPG"

const Intro = () => {
  return <div className = "intro">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, my name is</h2>
            <h1 className = "i-name">Ben Juan </h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    {/* Add more titles in the future when I get more positions */}
                    <div className="i-title-item">Student</div>
                </div>
            </div>
            <div className="i-description">
                I am currently a senior studying computer science at UT Dallas.
                I enjoy full stack development. 
            </div>
        </div>
      </div>
            
      <div className="i-right">
        <img src = {Me} alt = "" className = "i-image" />
      </div>
  </div>;
};

export default Intro;
