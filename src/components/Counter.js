import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from 'actions';

const Counter = ({counter, onIncrease}) => (
  <section className='counterSection'>
    <button onClick={onIncrease}>
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
