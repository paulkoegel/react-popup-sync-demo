import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { LOCAL_STORAGE_KEY } from 'constants';
import reducer from './reducers';
import { setCounter } from 'actions';

let persistedState;
try {
  // need the `|| {}` fallback because getItem will return `null` if the key is not present. `Null` will overwrite the reducers' initial values, `{}` won't.
  persistedState = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
} catch(e) {
  console.warn("Couldn't restore Redux state from local storage:", e);
  persistedState = {};
};

const store = createStore(reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  // console.log('Redux store subscribe: set counter value in localstorage', store.getState().counter, JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)));
  const persistedState = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  const persistedCounter = persistedState.counter;
  console.log('REDUX STORE SUBSCRIBE (persisted|state):', persistedCounter, store.getState().counter);
  if (store.getState().counter !== persistedCounter) {
    console.log('REDUX STORE SUBSCRIBE: IF');
    // console.log('updating localstorage (before|after):', persistedCounter, store.getState().counter);
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({counter: store.getState().counter})
    );
  } else {
    console.log('REDUX STORE SUBSCRIBE: ELSE');
  }
}),
200);

let theCounter = 0;

// this listener will only be triggered in OTHER windows
// it won't be triggered in the window where localStorage.setItem was called
// In Firefox (not so in IE11), this listener is also not triggered when the values in
// localstorage didn't change, which prevents an infinite loop between the main and
// popup window.
window.addEventListener('storage', (e) => {
  const newValue = JSON.parse(e.newValue) || {};
  const oldValue = JSON.parse(e.oldValue) || {};

  console.log('LS::EL (new|old):', newValue.counter, oldValue.counter);
  // for IE11 we need this IF because the callback is triggered even when
  // the store's state didn't change. It prevents an infinite loop between the
  // popup and main window.
  if (newValue.counter !== oldValue.counter && theCounter < 100) {
    theCounter++;
    console.log('LS::EL: IF, dispatch SET_COUNTER', theCounter);
    store.dispatch(setCounter(newValue.counter));
  } else {
    console.log('LS::EL: ELSE', theCounter);
  }
});

export default store;
