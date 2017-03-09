import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementCounter } from './actions';

const App = ({ counter, onIncrease }) => (
  <div>
    <h1>App</h1>
    <button onClick={onIncrease}>
      {counter}
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => (
  {
    counter: state.counter
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onIncrease: () => {
      console.log('onIncrease');
      console.log(incrementCounter());
      dispatch(incrementCounter());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
