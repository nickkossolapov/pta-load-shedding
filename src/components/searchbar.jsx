import React, {Component} from 'react';
import {Col, FormGroup, InputGroup} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import suburbs from '../data/suburb_data';
import DropDown from './dropdown';
import Row from 'react-bootstrap/es/Row';

export default class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selected: []
    }
  }

  handleSuburbChange(selected){
    this.setState({ selected : selected });
    let [{ group, label }] = selected[0] ? selected : [{group: null, label: null}];
    this.props.onGroupChange(group);
    this.props.onSuburbChange(label);
  }

  handleGroupChange(group){
    this.props.onGroupChange(group);
    if (this.state.selected[0] && group !== this.state.selected[0].group){
      this.props.onSuburbChange(null);
    }
  }

  static getDerivedStateFromProps(props, state){
    return (state.selected[0] && state.selected[0].group !== props.group)
      ? { selected: [] }
      : null;
  }

  render(){
    return (
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
                <DropDown onChange={group => this.handleGroupChange(group)}
                  group={this.props.group} type="group" size="16"/>
                <DropDown onChange={this.props.onStageChange} stage={this.props.stage} type="stage" size="8"/>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}
