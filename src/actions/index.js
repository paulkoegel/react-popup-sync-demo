import { COUNTER_INCREMENT, COUNTER_SET } from 'constants';
import { NOTES_ADD } from 'constants';

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

export const addNote = (body) => (
  {
    type: NOTES_ADD,
    note: {
      body: body,
      date: new Date().toLocaleString('de-DE'),
      author: 'Bud Spencer',
      title: 'Important Note!!!'
    }
  }
);
