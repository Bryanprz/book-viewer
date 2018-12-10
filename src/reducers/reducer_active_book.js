// State argument is not application state, only the state
// this reducer is responsible for

// Never mutate the state within a reducer. always return a fresh object.
// e.g. never do state.title = "new title"
export default function(state = null, action) {
  switch(action.type) {
  	case 'BOOK_SELECTED':
  	  return action.payload;
  }

  return state
}