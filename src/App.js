import React, { Component } from 'react';
import './App.css';
import Meta from './Meta';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Meta />
        <button onClick={this.props.increaseCounter}>
          {this.props.counter}
        </button>
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
        <Meta />
      </div>
    );
  }
}

export default App;
