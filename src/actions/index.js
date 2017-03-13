import { COUNTER_INCREMENT, COUNTER_SET } from 'constants';

export const incrementCounter = () => (
  {
    type: COUNTER_INCREMENT
  }
);

export const setCounter = (value) => (
  {
    type: COUNTER_SET,
    value
  }
);
