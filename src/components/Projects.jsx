import React, { Component } from 'react';
import Carousel from "react-multi-carousel"
import {Col, Row, Container} from "react-bootstrap";
import {ProjectsData } from "../data/ProjectsData";
import "../styling/projects.css";
import 'react-multi-carousel/lib/styles.css';

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

class Projects extends Component {
  render() {
    return (
      <section className = "Projects">
      <Container>
        <Row>
          <Col>
            <div className = "Projects-box">
              <h2 className = "Projects-Title">Projects</h2>
              <Carousel responsive = {responsive} infinite = {true} renderButtonGroupOutside={true}>
                {ProjectsData.map((project, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <a
                          className="proj-link"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="Projects-img"
                            src={require(`../images/${project.img}`).default}
                            alt={`Proj${index}`}
                          ></img>
                        </a>
                      </div>
                      <h5 className = "Projects-Name">{project.id}</h5>
                      <span className="Projects-description">{project.description}</span>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
  }
}

export default Projects;
