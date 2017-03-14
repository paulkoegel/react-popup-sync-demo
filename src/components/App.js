import React from 'react';
import 'css/App.css';
import Notes from './Notes';
import Documents from './Documents';
import Counter from './Counter';

const openPopout = () => {
  window.open('popout.html', 'Popout Window Title', 'width=800, height=500');
};

const App = () => (
  <div>
    <button className='openPopoutButton' onClick={openPopout}>
      Open popout
    </button>
    <div className='appWrapper'>
      <Notes />
      <Documents />
      <Counter />
    </div>
  </div>
);

export default App;
