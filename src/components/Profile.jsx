/* eslint-disable react/jsx-no-target-blank */
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Profile() {
  return (
    <section className="jumbotrom text-center primaryColor py-5">
      <Container>
        <img
          className="profilePic"
          src="https://avatars.githubusercontent.com/u/37418003?s=400&u=89722de4f93f6ea6a50d1622f2655902982a5372&v=4"
          alt=""
        />
        <h1 className="jumbotrom-heading text-white">Matheus Paes</h1>
        <p className="lead text-white">
          Front-End Developer - Computer Science student
        </p>
        <a href="#contato" className="btn btn-dark">
          Contato
        </a>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <a
            href="https://github.com/matheus6p"
            className="text-white px-2"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-henrique-paes-de-almeida-18565914a/"
            className="text-white px-2"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/matheushpa/"
            className="text-white px-2"
            target="_blank"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </Container>
    </section>
  );
}
