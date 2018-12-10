export function selectBook(book) {
  // selectBook is an action creator. needs to return
  // an action, an action with a 'type' property that describes
  // the purpose of the action.
  return {
  	type: 'BOOK_SELECTED',
  	payload: book
  };
}