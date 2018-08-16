import React, { Component } from 'react';

import Map from '../map';
import Calls from '../calls';
import Report from '../report';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <header>

        </header>
        <main>
          <Calls />
        </main>
      </div>
    )
  }
}
