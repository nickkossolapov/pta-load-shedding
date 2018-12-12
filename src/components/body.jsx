import axios from 'axios';
import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

import SearchBar from './searchbar';
import InfoBar from './infobar';
import Schedule from './schedule';
import './globals.css';

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

  getStateChangeHandler(stateKey, value){
    return (value) => this.setState({
      [stateKey]: value
    });
  }

  render() {
    return (
      <Grid>
        <SearchBar
          stage={this.state.stage}
          group={this.state.group}
          onStageChange={this.getStateChangeHandler("stage")}
          onGroupChange={this.getStateChangeHandler("group")}
          onSuburbChange={this.getStateChangeHandler("suburb")}/>
        <InfoBar
          stage={this.state.stage}
          group={this.state.group}
          suburb={this.state.suburb}/>
        <Schedule
          stage={this.state.stage}
          group={this.state.group}/>
      </Grid>
    );
  }
}