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
        // for some reason the action lands in the popout in a broken way. It is shown as having this extra attribute `{Symbol(react.element)_m.e807tasn0b3: undefined`, which breaks lodash's `_.isPlainObject`, which Redux uses to verify actions in `dispatch`. No idea how `action` gets modified that way :(
        // serializing & deserializing `action` later fixes the issue.
        otherWindow.eventCenter(JSON.stringify(action));
      }
      dispatch(action);
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
