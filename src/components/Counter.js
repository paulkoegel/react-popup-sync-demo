import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from 'actions';
import 'css/Counter.css';
import { POPOUT_SYNCH } from 'constants';

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
      console.log('onIncrease', otherWindow);
      if (otherWindow) {
        // source: https://github.com/Snugug/eq.js/issues/53#issuecomment-130221203
        if (!('CustomEvent' in window && (typeof window.CustomEvent === 'function' || (window.CustomEvent.toString().indexOf('CustomEventConstructor') > -1)))) {
          // IE11 - Reiner
          const synchEvent = otherWindow.document.createEvent('CustomEvent');
          console.log('IE11 Reiner')//, synchEvent);
          synchEvent.initCustomEvent(POPOUT_SYNCH, false, false, action);
          otherWindow.dispatchEvent(synchEvent);
          //synchEvent;
          // IE11 - stackoverflow
          // const synchEvent = document.createEvent('CustomEvent');
          // synchEvent.initEvent(POPOUT_SYNCH, true, true, {hereIsSomeCustomIE11: 'data'});
          //
          // // target can be any Element or other EventTarget.
          // otherWindow.dispatchEvent(synchEvent);
        } else { // other browsers
          const synchEvent = new CustomEvent(POPOUT_SYNCH, { detail: action});
          otherWindow.dispatchEvent(synchEvent);
        }
      }
      dispatch(action);
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
