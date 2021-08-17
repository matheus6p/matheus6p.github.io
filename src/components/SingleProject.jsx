import { Card, Button, ButtonGroup } from "react-bootstrap";

/* eslint-disable jsx-a11y/alt-text */
export default function SingleProject(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.preview} className="cardImg" />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ul>
          <li>{props.tech1}</li>
          <li>{props.tech2}</li>
          <li>{props.tech3}</li>
          <li>{props.tech4}</li>
        </ul>
        <ButtonGroup>
          <Button variant="outline-primary">Ver Projeto</Button>
          <Button variant="outline-success">Repositório</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
