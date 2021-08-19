/* eslint-disable react/jsx-no-target-blank */
import { Card, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import swdb from "../assets/sw-dashboard.jpeg";
import happy from "../assets/happy.jpeg";

/* eslint-disable jsx-a11y/alt-text */
export default function SingleProject(props) {
  return (
    <Row>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={swdb} className="cardImg" />
          <Card.Body>
            <Card.Title>Star Wars Dashboard</Card.Title>
            <Card.Text>
              Mini projeto para estudo sobre consumo de API's utilizando axios.
            </Card.Text>
            <ul>
              <li>Javascript</li>
              <li>Axios</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <ButtonGroup>
              <a
                className="me-1"
                href="https://starwars-dashboard-two.vercel.app/"
                target="_blank"
              >
                <Button variant="outline-primary">Ver Projeto</Button>
              </a>
              <a
                href="https://github.com/matheus6p/starwars-dashboard"
                target="_blank"
              >
                <Button variant="outline-success">Repositório</Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={happy} className="cardImg" />
          <Card.Body>
            <Card.Title>Happy</Card.Title>
            <Card.Text>
              Projeto feito durante a Next Level Week realizada pela{" "}
              <a href="https://rocketseat.com.br/">Rocketseat</a>.
            </Card.Text>
            <ul>
              <li>React Js</li>
              <li>Typescript</li>
              <li>Node Js</li>
              <li>SQLite</li>
            </ul>
            <ButtonGroup>
              <a
                className="me-1"
                href="https://nlw3-seven.vercel.app/"
                target="_blank"
              >
                <Button variant="outline-primary">Ver Projeto</Button>
              </a>
              <a href="https://github.com/matheus6p/nlw3.0" target="_blank">
                <Button variant="outline-success">Repositório</Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
