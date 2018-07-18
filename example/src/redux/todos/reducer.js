import { types } from './actions';

const defaultState = [];

export default function results(state = defaultState, action) {
	switch (action.type) {
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
}
