// Redux:
// - Action creators are functions returns action object
// - Actions are objects contain action data, similar to event object
// - Action object has 'type' and 'payload' data

export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED', // to be extracted into constants
		payload: book
	};
}