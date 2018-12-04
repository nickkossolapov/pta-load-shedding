import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
// import data from '../data/data';
import suburbs from '../data/suburb_data';

export default function SearchBar(props) {
  return (
    <Grid>
      <Row>
        <Col md-10><Typeahead options={Object.entries(suburbs)}/></Col>
      </Row>
    </Grid>
  );
}