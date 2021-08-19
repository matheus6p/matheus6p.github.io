import { Container, Navbar, Nav } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home">Matheus Paes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link target="_blank" href="https://github.com/matheus6p">
              Github
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.linkedin.com/in/matheus-henrique-paes-de-almeida-18565914a/s"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.instagram.com/matheushpa/"
            >
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
