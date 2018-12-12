import React, {Component} from 'react';
import {Col, FormGroup, Grid, InputGroup, Row} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import suburbs from '../data/suburb_data';
import DropDown from './dropdown';

export default class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSuburbChange(selected){
    this.setState({ selected: selected });
    let selectedGroup = selected[0] ? selected[0]['group'] : null;
    this.props.onGroupChange(selectedGroup);
  }

  static getDerivedStateFromProps(props, state){
    return (state.selected[0] && state.selected[0].group !== props.group)
      ? { selected: [] }
      : null;
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>

            <FormGroup>
              <InputGroup>
                <Typeahead
                  selected={this.state.selected}
                  options={suburbs}
                  onChange={selected => this.handleSuburbChange(selected)}
                  clearButton={true}/>
                <InputGroup.Button className="input-group-append">
                  <DropDown onChange={this.props.onGroupChange} group={this.props.group} type="group" size="16"/>
                  <DropDown onChange={this.props.onStatusChange} status={this.props.status} type="status" size="8"/>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
