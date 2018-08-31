/*
 * This is an example of a model created entirely in one file, similar to the Ducks pattern.
 * For simple models this can be sometimes more readable than using separate files.
 */
import { Basic } from 'redux-tools/types';
import { generateActionsAndTypes } from 'redux-tools';

const { actions, types } = generateActionsAndTypes('todos', [
	new Basic('SET'),
	new Basic('ADD_TODO'),
	new Basic('DELETE_TODO'),
	new Basic('UPDATE_TODO'),
]);

const reducer = (state = [], action) => {
	switch (action.type) {
		case types.SET:
			return [...action.payload];
		case types.ADD_TODO:
			return [
				...state,
				{
					completed: false,
					created: Date.now(),
					id: Date.now(),
					listID: action.payload.listID,
					text: action.payload.text,
					updated: Date.now(),
				},
			];
		case types.UPDATE_TODO:
			return state.map((todo) => ({
				...todo,
				...(todo.id === action.payload.id ? action.payload : {}),
			}));
		case types.DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
};

export default {
	actions,
	reducer,
	types,
};
