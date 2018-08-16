import React, { Component } from 'react';

const MAPS_URL = "";

export default class Map extends Component {
  render() {
    const map_url
      = `https://google.com/maps/embed/v1/place?key=AIzaSyD55V3pJb2XQ02l44ecXJ5VgWWE8KRk-NM&q=${this.props.postcode.replace(/ /g, '+')}&zoom=9`;

    return(
      <iframe height="400px" width="400px" src={map_url}></iframe>
    )
  }
}
