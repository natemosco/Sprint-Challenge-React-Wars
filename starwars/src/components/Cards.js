//props.person.name, props.person.height, etc
import React from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

const Cards = (props) => {
  return (
    <div className="person-card">
      <Card>
        <CardBody>
          <CardTitle className = "title">{props.person.name}</CardTitle>
          <CardText className="stats">Height: {props.person.height}</CardText>
          <CardText className="stats">Mass: {props.person.mass}</CardText>
          <CardText className="stats">Hair Color: {props.person.hair_color}</CardText>
          <CardText className="stats">Skin Color: {props.person.skin_color}</CardText>
          <CardText className="stats">Eye Color: {props.person.eye_color}</CardText>
          
          <CardText className="stats">Gender: {props.person.gender}</CardText>
          <CardText>
            <small className="stats" className="text-muted">Birth Year: {props.person.birth_year}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;