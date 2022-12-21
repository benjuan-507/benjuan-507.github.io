import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import "../styling/skills.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "../styling/projects.css";
import {SkillsData} from "../data/SkillsData";


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  class Skills extends Component {
    render() {
      return (
        <section className = "Projects">
        <Container>
          <div className = "Projects-box">
            <h2 className = "Projects-Title">Skills</h2>
            <Carousel responsive = {responsive} infinite = {true} renderButtonGroupOutside={true}>
              {SkillsData.map((project, index) => {
                return (
                  <div key={index}>
                    <div>
                        <img
                          className="Projects-img"
                          src={require(`../images/${project.img}`).default}
                          alt={`Proj${index}`}
                        ></img>
                    </div>
                    <h5 className = "Projects-Name">{project.id}</h5>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </section>
      );
    }
  }
export default Skills;