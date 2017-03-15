import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'css/index.css';
import Counter from 'components/Counter';
import counterReducer from 'reducers/counterReducer';
import { POPOUT_SYNCH } from 'constants';

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('setting up event listener');
window.addEventListener(POPOUT_SYNCH, (e) => {
  console.log(POPOUT_SYNCH, e.detail);
  store.dispatch(e.detail);
});

// window.addEventListener(POPOUT_INIT, (e) => {
//   console.log(POPOUT_SYNCH, e.detail);
//   store.dispatch(e.detail);
// });


ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('popout-root')
);
