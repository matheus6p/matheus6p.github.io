import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container className="">
        <h1 className="text-center title mb-5">Projetos</h1>
        <Row>
          <Col md={6} className="mb-2">
            <SingleProject />
          </Col>
          <Col md={6} className="mb-2">
            <SingleProject />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
