// Redux:
// - reducer is a function that reduce/accumulate previous state with actions into a new state
// - this reducer disregard any action and always return static data as state

export default function() {
	return [
		{title: 'Javascript', pages: 10},
		{title: 'Harry Potter', pages: 123},
		{title: 'Dark Tower', pages: 202},
		{title: 'Ruby', pages: 2}
	];
};