import React, { Component } from 'react';

import Report from '../report';

import { WHISPER_AREAS, CONTRACTORS, CALL_TYPES, CONTACT_TYPES } from '../../SampleData';
import './style.css';

const INITIAL_STATE =  {
  whisper_area: '',
  contractor: '',
  call_type: '',
  contact_type: '',
  calls: [],
  saveEnabled: false
}

export default class Calls extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.renderSelect = this.renderSelect.bind(this);
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
      }]
    });
  }

  update(e) {
    const { whisper_area, contractor, call_type, contact_type } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      saveEnabled: (whisper_area && contractor && call_type && contact_type)
    });
  }

  renderItem(index, id, name) {
    return (
      <option key={index} value={id}> {name} </option>
    );
  }

  renderSelect(name, label, items, current) {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} value={current} onChange={this.update}>
          <option value="">{label}</option>
          {
            items.map((item, index) => {
              return this.renderItem(index, item.id, item.name)
            })
          }
        </select>
      </div>
    );
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
          {
            this.renderSelect("contact_type", "Contact Type", CONTACT_TYPES, contact_type)
          }
          {
            this.renderSelect("whisper_area", "Whisper Area", WHISPER_AREAS, whisper_area)
          }
          {
            this.renderSelect("contractor", "Contractor", CONTRACTORS, contractor)
          }
          {
            this.renderSelect("call_type", "Call Type", CALL_TYPES, call_type)
          }
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
