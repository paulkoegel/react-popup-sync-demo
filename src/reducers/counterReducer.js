import { COUNTER_INCREMENT, COUNTER_SET } from 'constants';

export default (state = 0, action) => {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_SET:
      console.log('counter_set', action);
      return action.value;
    default:
      return state;
  }
};
