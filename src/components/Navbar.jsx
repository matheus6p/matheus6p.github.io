import { Container, Navbar, Nav } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home">Matheus Paes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Github</Nav.Link>
            <Nav.Link href="#link">LinkedIn</Nav.Link>
            <Nav.Link href="#link">Instagram</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
