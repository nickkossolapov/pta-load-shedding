import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
// import data from '../data/data';
import suburbs from '../data/suburb_data';

export default function SearchBar(props) {
  let options = ["1", "2", "3", "4"];
  return (
    <Grid>
      <Row>
        <Col md-10>
          <Typeahead options={suburbs} onChange={selected => props.onGroupChange(selected[0]['group'])}/>
        </Col>
      </Row>
    </Grid>
  );
}