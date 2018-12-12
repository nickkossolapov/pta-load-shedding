import axios from 'axios';
import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';

import SearchBar from './searchbar';
import InfoBar from './infobar';

const STAGE_URL = 'https://ewn.co.za/assets/loadshedding/api/eskomstatus?';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: null,
      group: null,
      suburb: null
    };

    this.getStage();
  }

  getStage() {
    axios.get(STAGE_URL)
      .then(response => {
        const status = response.data.slice(-1);
        if (!isNaN(status)){
          this.setState({status});
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  GetStateChangeHandler(stateKey, value){
    return (value) => this.setState({
      [stateKey]: value
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <SearchBar
            stage={this.state.stage}
            group={this.state.group}
            onStageChange={this.GetStateChangeHandler("stage")}
            onGroupChange={this.GetStateChangeHandler("group")}
            onSuburbChange={this.GetStateChangeHandler("suburb")}/>
        </Row>
        <Row>
          <InfoBar
            stage={this.state.stage}
            group={this.state.group}
            suburb={this.state.suburb}/>
        </Row>
      </Grid>
    );
  }
}