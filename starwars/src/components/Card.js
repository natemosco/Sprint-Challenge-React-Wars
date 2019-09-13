//props.person.name, props.person.height, etc
import React from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

const Card = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.person.name}</CardTitle>
          <CardText>Height: {props.person.height}</CardText>
          <CardText>Mass: {props.person.mass}</CardText>
          <CardText>Hair Color: {props.person.hair_color}</CardText>
          <CardText>Skin Color: {props.person.skin_color}</CardText>
          <CardText>Eye Color: {props.person.eye_color}</CardText>
          
          <CardText>Gender: {props.person.gender}</CardText>
          <CardText>
            <small className="text-muted">Birth Year: {props.person.birth_year}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card;