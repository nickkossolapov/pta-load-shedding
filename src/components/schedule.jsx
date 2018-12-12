import React, {Component} from 'react';
import {Col, Row, Table} from 'react-bootstrap';

import data from '../data/data';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_AHEAD = 5;

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.data = data;

    const date = new Date();
    const startDay = date.getDay();

    this.startDate = date.getDate();
    this.daysAheadNames = [];

    for (let i = 0; i < DAYS_AHEAD; i++){
      let dayIndex = (startDay + i)%7;
      this.daysAheadNames.push(DAYS[dayIndex]);
    }
  }

  getSplitScheduleData(){
    let {group, stage} = this.props;

    let weekTimes = [...Array(DAYS_AHEAD)];
    const loadSheddingData = this.data[group];

    for (let i = 0; i < DAYS_AHEAD; i++){
      let dayTimes = [];
      for (let j = parseInt(stage); j > 0; j--){
        dayTimes.push(loadSheddingData[j][(this.startDate+i).toString()])
      }

      weekTimes[i] = dayTimes ? dayTimes.sort() : [];
    }

    return weekTimes;
  }

  render() {
    if (this.props.group && this.props.stage){
      return(
        <Row className="schedule">
          <Col md={10} mdOffset={1}>
            <Table responsive>
              <ScheduleTableHead daysAheadNames={this.daysAheadNames}/>
              <ScheduleTableBody dayTimes={this.getSplitScheduleData()}/>
            </Table>
          </Col>
        </Row>
      );
    } else {
      return (null);
    }
  }
}

function ScheduleTableHead({daysAheadNames}){
  return (
    <thead>
      <tr>
        {daysAheadNames.map(day => {
          return <th className="text-center col-md-1" key={day}>{day}</th>
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
        {dayTimes.map((times, index) => {return <Day key={index} times={times}/>})}
      </tr>
    </tbody>
  )
}

function Day(props){
  let {times} = props;
  return (
    <td className="text-center col-md-1">
      {times.map((time, index) => {
        return <p key={index}>{time}</p>
      })}
    </td>
  );
}