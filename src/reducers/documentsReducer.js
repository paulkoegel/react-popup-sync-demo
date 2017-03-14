import { DOCUMENTS_TOGGLE_FAVOURITE, DOCUMENTS_DELETE } from 'constants';

const initialDocuments = new Array(10).fill({}).map((e,i) => {
  return {
    id: i+1,
    date: `2017-03-1${i}`,
    author: 'Terence Hill',
    title: `Document ${i+1}`,
    category: ['Life advice', 'Romance', 'Science', 'Classics'][i % 4]
  }
});

export default (state = initialDocuments, action) => {
  switch(action.type) {
    case DOCUMENTS_TOGGLE_FAVOURITE: {
      return state.map(d => {
        if (d.id === action.documentId) {
          return {
            ...d,
            isFavourite: !d.isFavourite
          };
        } else {
          return d;
        }
      });
    }
    case DOCUMENTS_DELETE: {
      return state.map(d => {
        if (d.id === action.documentId) {
          return {
            ...d,
            isDeleted: true
          };
        } else {
          return d;
        }
      });
    }
    default: {
      return state;
    }
  }
};
