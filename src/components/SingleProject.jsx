import { Card, Button, ButtonGroup } from "react-bootstrap";
import swdb from "../assets/sw-dashboard.jpeg";

/* eslint-disable jsx-a11y/alt-text */
export default function SingleProject() {
  return (
    <Card>
      <Card.Img variant="top" src={swdb} className="cardImg" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ul>
          <li>Python</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <ButtonGroup>
          <Button variant="outline-primary">Ver Projeto</Button>
          <Button variant="outline-success">Repositório</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
