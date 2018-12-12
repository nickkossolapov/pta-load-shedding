import React, {Component} from 'react';
import {Col, Row, Table} from 'react-bootstrap';

import data from '../data/data';

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.data = data;
  }

  getSplitScheduleData(){
    let {group, stage} = this.props;
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const startDate = dayOfMonth - dayOfWeek;

    let loadSheddingTimes = [];
    const loadSheddingData = this.data[stage][group];

    for (let day = startDate; day > startDate + 7; day++){
      loadSheddingTimes.push(loadSheddingData[day.toString()]);
    }

    return loadSheddingTimes;
  }

  render() {
    return(
      <Row>
        <Col md={8} mdOffset={2}>
          <Table responsive>
            <ScheduleTableHead />
            <ScheduleTableBody dayTimes={this.getSplitScheduleData()}/>
          </Table>
        </Col>
      </Row>
    );
  }
}

function ScheduleTableHead(){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <thead>
      <tr>
        {days.map(day => {
          return <th key={day}>{day}</th>
        })}
      </tr>
    </thead>
  )
}

function ScheduleTableBody(props){
  let {dayTimes} = props;
  return (
    <tbody>
      <tr>
        {dayTimes.map(times => {
          return times.map(time => {
            return <p>{time}</p>
          })
        })}
      </tr>
    </tbody>
  )
}