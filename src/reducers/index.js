import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// A reducer is a function that returns a piece of the application state.

// a container is a react component that has direct access to the state managed
// by Redux. Also called 'smart component' as opposed to 'dumb component'.

// How to decide what component gets promoted to a container?
// In general, we want the most parent component that cares about a 
// particular piece of state, to be a container.


// this reducer is just a combination of all reducers
// combineReducers will add the keys 'books' and 'activeBook' 
// to the global app state (this is from redux library)
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
