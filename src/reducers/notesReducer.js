import { NOTES_ADD } from 'constants';

const initialNotes = [{
  id: 1,
  date: '2017-03-01',
  author: 'Jim Beam',
  title: 'A very important note',
  body: `—Are you coming, you fellows?
—I'm ready, Buck Mulligan answered, going towards the door. Come out, Kinch. You have eaten all we left, I suppose.`
}];

export default (state = initialNotes, action) => {
  switch(action.type) {
    case NOTES_ADD: {
      return [
        ...state,
        {
          ...action.note,
          id: state[state.length-1].id + 1,
          isNew: true
        }
      ];
    }
    default: {
      return state;
    }
  }
};
