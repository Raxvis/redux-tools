import { types } from './actions';

const defaultState = [];

export default function results(state = defaultState, action) {
	switch (action.type) {
		case types.ADD_LIST:
			return [
				...state,
				{
					created: Date.now(),
					id: Date.now(),
					name: action.payload,
					updated: Date.now(),
				},
			];
		case types.UPDATE_LIST:
			return state.map((list) => ({
				...list,
				...(list.id === action.payload.id ? action.payload : {}),
			}));
		case types.DELETE_LIST:
			return state.filter((list) => list.id !== action.payload);
		default:
			return state;
	}
}
