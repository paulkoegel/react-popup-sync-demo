import React from 'react';
import 'css/App.css';
import Counter from './Counter';
import Notes from './Notes';

const openPopout = () => {
  window.open('popout.html', 'Popout Window Title', 'width=800, height=500');
};

const App = () => (
  <div>
    <button onClick={openPopout}>
      Open popout
    </button>
    <div className='appWrapper'>
      <Notes />
      <Counter />
    </div>
  </div>
);

export default App;
