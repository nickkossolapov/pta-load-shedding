import React from 'react';
import {Col, Label} from 'react-bootstrap';

export default function InfoBar(props) {
  let headerText;
  if (props.suburb){
    headerText = props.suburb;
  } else if (props.group) {
    headerText = `Group: ${props.group}`
  } else {
    headerText = "Nothing selected";
  }

  return (
    <div>
      <Col md={3} mdOffset={5}>
        <h4>{headerText}</h4>
      </Col>
      <Col md={1}>
        <h4>
          <Label bsStyle="info">Stage: {props.stage ? props.stage : "None"}</Label>
        </h4>
      </Col>
    </div>
  );
}