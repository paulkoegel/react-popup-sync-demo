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
  console.log('subscribe');
  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({counter: store.getState().counter})
  );
}),
200);

window.addEventListener('storage', (e) => {
  console.log('storage', e);
  store.dispatch(setCounter(e.newValue));
});

export default store;
