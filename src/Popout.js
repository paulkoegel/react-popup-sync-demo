import React, { Component } from 'react';
import './App.css';
import Meta from './Meta';

class Popout extends Component {
  render() {
    return (
      <div>
        <Meta />
        <h1>{this.props.counter}</h1>
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
        <Meta />
      </div>
    );
  }
}

export default Popout;
