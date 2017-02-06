import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Popout from './App';
import './index.css';

const appState = {
  counter: 0
};

let popout;

if (!window.opener) {
  popout = window.open('http://localhost:3000/', 'Popout Demo', 'width=350, height=250');
}

const increaseCounter = () => {
  appState.counter++;
  ReactDOM.render(
    <App counter={appState.counter} increaseCounter={increaseCounter} />,
    document.getElementById('root')
  );

  ReactDOM.render(
    <Popout counter={appState.counter} />,
    popout.document.getElementById('root')
  );
};

ReactDOM.render(
  <App counter={appState.counter} increaseCounter={increaseCounter} />,
  document.getElementById('root')
);

if (!window.opener) {
  ReactDOM.render(
    <Popout counter={appState.counter} />,
    popout.document.getElementById('root')
  );
}
