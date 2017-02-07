import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Popout from './Popout';
import './index.css';

const appState = {
  counter: 0
};

const popout = window.open('http://localhost:3000/popout.html', 'Popout Demo', 'width=350, height=250');
console.log(popout);

const increaseCounter = () => {
  appState.counter++;
  ReactDOM.render(
    <App counter={appState.counter} increaseCounter={increaseCounter} />,
    document.getElementById('root')
  );

  ReactDOM.render(
    <Popout counter={appState.counter} />,
    popout.document.getElementById('popout-root')
  );
};

ReactDOM.render(
  <App counter={appState.counter} increaseCounter={increaseCounter} />,
  document.getElementById('root')
);

console.log('popout container', popout, popout.document, popout.document.getElementById('popout-root'));

popout.onload = () => {
  ReactDOM.render(
    <Popout counter={appState.counter} />,
    popout.document.getElementById('popout-root')
  );
};
