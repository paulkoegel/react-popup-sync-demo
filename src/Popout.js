import React, { Component } from 'react';
import './App.css';
import Meta from './Meta';
import MetaFixed from './MetaFixed';

class Popout extends Component {
  render() {
    return (
      <div>
        <MetaFixed />
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
        <Meta />
      </div>
    );
  }
}

export default Popout;
