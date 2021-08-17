import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";

import swdb from "../assets/sw-dashboard.jpeg";

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container className="">
        <h1 className="text-center title mb-5">Projetos</h1>
        <Row>
          <Col md={6} className="mb-2">
            <SingleProject
              preview={swdb}
              title={"Star Wars Dashboard"}
              description={
                "Mini projeto para estudo sobre consumo de API's utilizando a biblioteca axios."
              }
              tech1={"HTML"}
              tech2={"CSS"}
              tech3={"Javascript"}
              tech4={"Axios"}
            />
          </Col>
          <Col md={6} className="mb-2">
            <SingleProject />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
