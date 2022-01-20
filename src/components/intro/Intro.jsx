import React from 'react';
import "./intro.css"

const Intro = () => {
  return <div className = "intro">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, My name is</h2>
            <h1 className = "i-name">Ben Juan </h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    {/* Add more titles in the future when I get more positions */}
                    <div className="i-title-item">Student</div>
                    <div className="i-title-item">Fullstack</div>
                    <div className="i-title-item">Student</div>
                    <div className="i-title-item">Student</div>
                    <div className="i-title-item">Student</div>
                </div>
            </div>
            <div className="i-description">
                Text Description
            </div>
        </div>
      </div>
            


      <div className="i-right">right</div>
  </div>;
};

export default Intro;
