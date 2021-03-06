// State argument is not application state, only the this.state
// this reducer is responsible for.
// State will default to null, so state is not undefined when app first loaded
export default function(state = null, action) {
  console.log('in reducer with:', action);
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
