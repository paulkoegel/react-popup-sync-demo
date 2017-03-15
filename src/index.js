import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import 'css/index.css';
import store from './initStore';
import { POPOUT_SYNCH } from 'constants';

window.addEventListener(POPOUT_SYNCH, (e) => {
  console.log(POPOUT_SYNCH, e.detail);
  store.dispatch(e.detail);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
