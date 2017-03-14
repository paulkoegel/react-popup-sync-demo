import {
  COUNTER_INCREMENT, COUNTER_SET,
  NOTES_ADD,
  DOCUMENTS_DELETE, DOCUMENTS_TOGGLE_FAVOURITE
} from 'constants';

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
      title: body.substring(0, 30)
    }
  }
);

export const toggleFavouriteDocument = (documentId) => {
  return {
    type: DOCUMENTS_TOGGLE_FAVOURITE,
    documentId
  };
};

export const deleteDocument = (documentId) => {
  return {
    type: DOCUMENTS_DELETE,
    documentId
  }
};
