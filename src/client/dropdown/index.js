import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(index, id, name) {
    return (
      <option key={index} value={id}> {name} </option>
    );
  }

  render() {
    const { items, name, current, label, onChange } = this.props;

    return(
      <div>
        <label htmlFor={name}>{label}</label>
        <select name={name} value={current} onChange={onChange}>
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
}
