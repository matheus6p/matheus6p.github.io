/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <Container>
      <h2>Projetos</h2>
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Container>
  );
};

export default Projects;
