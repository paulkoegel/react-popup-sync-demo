import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from 'actions';
import 'css/Counter.css';

const Counter = ({counter, onIncrease}) => (
  <section className='counterSection'>
    <button className='counterButton' onClick={onIncrease}>
      {counter}
    </button>
  </section>
);

const mapStateToProps = (state, ownProps) => (
  {
    counter: state.counter,
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onIncrease: () => {
      dispatch(incrementCounter());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
