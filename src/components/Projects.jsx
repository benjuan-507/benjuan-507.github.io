import React, { Component } from 'react';
import {Card, Container} from "react-bootstrap";
import {ProjectsData } from "../data/ProjectsData";
import "../styling/projects.css";

export class Projects extends Component {
  render() {
    return (
      <Container className="Projects">
        {ProjectsData.map((project, key) => {
          return (
            <a
              //onClick={(e,project) => {if (project.url === "")e.preventDefault()}}
              target="_blank"
              rel="noopener noreferrer"
              href={project.url}
              key={key}
            >
              <Card className={project.cName}>
                <Card.Img
                  variant="top"
                  src={require(`../images/${project.img}`).default}
                  alt={project.name}
                />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          );
        })}
      </Container>
    );
  }
}

export default Projects;
