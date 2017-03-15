import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'css/index.css';
import Counter from 'components/Counter';
import counterReducer from 'reducers/counterReducer';

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('popout-root')
);

// popout function we're exposing to the main window
window.eventCenter = (serializedAction) => {
  const action = JSON.parse(serializedAction);
  store.dispatch(action);
};
