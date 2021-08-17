import { Card, Button, ButtonGroup } from "react-bootstrap";

/* eslint-disable jsx-a11y/alt-text */
export default function SingleProject(props) {
  const techs = props.tech;

  techs.map((item) => {
    console.log(item);
  });
  return (
    <Card>
      <Card.Img variant="top" src={props.preview} className="cardImg" />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ul>
          {techs.foreach((item) => {
            <li> {item} </li>;
          })}
        </ul>
        <ButtonGroup>
          <Button variant="outline-primary">Ver Projeto</Button>
          <Button variant="outline-success">Repositório</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
