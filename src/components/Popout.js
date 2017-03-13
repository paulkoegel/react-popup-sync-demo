import React, { Component } from 'react';
import 'css/App.css';

class Popout extends Component {
  render() {
    return (
      <h1>{this.props.counter}</h1>
    );
  }
}

export default Popout;
