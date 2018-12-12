import React from 'react';
import {Col, Label, Row} from 'react-bootstrap';

export default function InfoBar(props) {
  let headerText;
  if (props.suburb) {
    headerText = `${props.suburb} (Group ${props.group})`;
  } else if (props.group) {
    headerText = `Group ${props.group}`
  } else {
    headerText = "Nothing selected";
  }

  return (
    <Row className="info-bar">
      <Col className="text-center" md={5} mdOffset={3}>
        <h3>{headerText}</h3>
      </Col>
      <Col md={1}>
        <h3>
          <Label bsStyle={props.stage ? "warning" : "info"}>Stage: {props.stage ? props.stage : "None"}</Label>
        </h3>
      </Col>
    </Row>
  );
}