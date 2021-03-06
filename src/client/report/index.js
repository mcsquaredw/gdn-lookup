import React, { Component } from 'react';

import './style.css';
import { WHISPER_AREAS, CONTRACTORS, CALL_TYPES, CONTACT_TYPES } from '../../SampleData';

export default class Report extends Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      fromDate: new Date(now.getFullYear(), now.getMonth(), now.getDay(), 0, 0, 0),
      toDate: new Date(now.getFullYear(), now.getMonth(), now.getDay(), 23, 59, 999)
    }

    this.updateDate = this.updateDate.bind(this);
  }

  updateDate(ev) {
    this.setState({
      [ev.target.name] : ev.target.value
    });
  }

  render() {
    const { calls, classes } = this.props;
    const { fromDate, toDate } = this.state;
    const filteredCalls = calls.filter(item => {
      item.timestamp <= toDate && item.timestamp >= fromDate
    });

    console.log(filteredCalls);
    console.log(calls);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Timestamp</td>
              <td>Contact Type</td>
              <td>Whisper Area</td>
              <td>Contractor</td>
              <td>Call Type</td>
            </tr>
          </thead>
          <tbody>
            {
              filteredCalls.map((item,index) => {
                return (
                  <tr key={index}>
                    <td>{item.timestamp.toString()}</td>
                    <td>{CONTACT_TYPES[item.contact_type].name}</td>
                    <td>{WHISPER_AREAS[item.whisper_area].name}</td>
                    <td>{CONTRACTORS[item.contractor].name}</td>
                    <td>{CALL_TYPES[item.call_type].name}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
