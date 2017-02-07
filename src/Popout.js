import React, { Component } from 'react';
import './App.css';

class Popout extends Component {
  constructor(props) {
    console.log('popout', props);
    super(props);
  }

  render() {
    console.log('prender', this.props);
    return (
      <h1>{this.props.counter}</h1>
    );
  }
}

export default Popout;
