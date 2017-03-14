import React from 'react';
import 'css/Counter.css';

const Counter = ({counter, onIncrease}) => (
  <button className='counterButton' onClick={onIncrease}>
    {counter}
  </button>
);

export default Counter;
