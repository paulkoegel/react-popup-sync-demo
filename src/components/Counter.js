import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from 'actions';
import 'css/Counter.css';

const Counter = ({counter, onIncrease}) => (
  <section className='counterSection'>
    <h3>Counter</h3>
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
      const otherWindow = window.popout || window.opener;
      const action = incrementCounter();
      if (otherWindow) {
        const synchEvent = new CustomEvent('popout-synch', { detail: action});
        otherWindow.dispatchEvent(synchEvent);
      }
      dispatch(incrementCounter());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
