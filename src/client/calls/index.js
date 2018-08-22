import React, { Component } from 'react';

import Report from '../report';
import Dropdown from '../dropdown';
import { WHISPER_AREAS, CONTRACTORS, CALL_TYPES, CONTACT_TYPES } from '../../SampleData';
import './style.css';

const INITIAL_STATE =  {
  whisper_area: '',
  contractor: '',
  call_type: '',
  contact_type: '',
  calls: []
}

export default class Calls extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.save = this.save.bind(this);
    this.update = this.update.bind(this);
  }

  save(e) {
    e.preventDefault();
    const { whisper_area, contractor, call_type, contact_type, calls } = this.state;

    this.setState({
      whisper_area: '',
      contractor: '',
      contact_type: '',
      call_type: '',
      calls: [...calls, {
        timestamp: new Date(),
        whisper_area,
        contractor,
        call_type,
        contact_type
      }],
    });
  }

  update(e) {
    const { whisper_area, contractor, call_type, contact_type } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { calls, contact_type, whisper_area, contractor, call_type, saveEnabled } = this.state;
    const isEnabled = contact_type.length > 0 &&
                      whisper_area.length > 0 &&
                      contractor.length > 0 &&
                      call_type.length > 0;
    return(
      <div>
        <form>
          <Dropdown name="contact_type" label="Contact Type" items={CONTACT_TYPES} current={contact_type} onChange={this.update} />
          <Dropdown name="whisper_area" label="Whisper Area" items={WHISPER_AREAS} current={whisper_area} onChange={this.update} />
          <Dropdown name="contractor" label="Contractor" items={CONTRACTORS} current={contractor} onChange={this.update} />
          <Dropdown name="call_type" label="Call Type" items={CALL_TYPES} current={call_type} onChange={this.update} />
          <br />
          <button onClick={this.save} disabled={!isEnabled}>
            Save Call
          </button>
        </form>
        <Report calls={calls} />
      </div>
    );
  }
}
