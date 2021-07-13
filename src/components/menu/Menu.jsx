import { Container, Nav, Navbar } from "react-bootstrap";

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
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">Matheus Paes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="https://github.com/matheus6p" target="blank">
                Github
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/matheus-henrique-paes-de-almeida-18565914a/"
                target="blank"
              >
                LinkedIn
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/matheushpa/"
                target="blank"
              >
                Instagram
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
