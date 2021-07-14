import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Menu = () => {
  return (
    <header>
      <style type="text/css">
        {`
          .bg-dark {
            background-color: #222 !important;
          }
        `}
      </style>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container fluid="lg">
          <Navbar.Brand href="#">Matheus Paes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link
                href="https://github.com/matheus6p"
                target="blank"
                className="d-flex align-items-center"
              >
                Github <FaGithub />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/matheus-henrique-paes-de-almeida-18565914a/"
                target="blank"
                className="d-flex align-items-center"
              >
                LinkedIn <FaLinkedin color={"#2867B2"} />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/matheushpa/"
                target="blank"
                className="d-flex align-items-center"
              >
                Instagram <FaInstagram color={"#C13584"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
