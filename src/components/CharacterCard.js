import React from "react";
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <Col xs="4">
    <Card>
      <CardImg top width="100%" src={props.image} alt={props.name} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.species}</CardSubtitle>
        <CardText>
        {`${ props.name } has appeared in ${ props.episode.length } ${ props.episode.length === 1 ? 'episode' : 'episodes'}`}
        </CardText>
      </CardBody>
    </Card>
    </Col>
  );
}
