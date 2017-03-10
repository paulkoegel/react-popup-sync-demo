const names = [ 'Jim Beam', 'Peter Parker', 'Norah Jones', 'Bud Spencer', 'Nina Simone'];
const initialState = names.map((name, i) => ({id: i, name}));

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
