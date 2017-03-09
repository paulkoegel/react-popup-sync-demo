import { COUNTER_INCREMENT } from 'constants';

export default (state = 0, action) => {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
