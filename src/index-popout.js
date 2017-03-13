import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'css/index.css';
import Counter from 'components/Counter';
import store from './initStore';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('popout-root')
);
