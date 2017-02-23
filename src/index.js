import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Popout from './Popout';
import './index.css';

const appState = {
  counter: 0
};

const renderPopout = () => {
  ReactDOM.render(
    <Popout counter={appState.counter} />,
    popout.document.getElementById('popout-root')
  );
};

const renderApp = () => {
  ReactDOM.render(
    <App counter={appState.counter} increaseCounter={increaseCounter} />,
    document.getElementById('root')
  );
};

const increaseCounter = () => {
  appState.counter++;
  renderApp();
  renderPopout();
};

renderApp();
const popout = window.open('/popout.html', 'Popout Demo', 'width=350, height=250, resizable=1');
popout.onload = renderPopout;
