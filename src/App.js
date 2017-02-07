import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.props.increaseCounter}>
          {this.props.counter}
        </button>
      </div>
    );
  }
}

export default App;
