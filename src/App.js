import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <button onClick={this.props.increaseCounter}>
        {this.props.counter}
      </button>
    );
  }
}

export default App;
