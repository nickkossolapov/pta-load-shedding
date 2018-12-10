import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './searchbar';

const STATUS_URL = 'https://ewn.co.za/assets/loadshedding/api/eskomstatus?';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      group: 1
    };

    this.getStatus();
  }

  getStatus() {
    axios.get(STATUS_URL)
      .then(response => {
        const status = response.data.slice(-1);
        if (!isNaN(status)){
          this.setStatus(status);
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
      <div>
        <SearchBar
          status={this.state.status}
          onGroupChange={this.GetStateChangeHandler("group")}/>
      </div>

    );
  }
}