import { types } from './actions';

const defaultState = {
	error: '',
	saving: false,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SAVE_REQUEST:
			return {
				...state,
				saving: true,
			};
		case types.SAVE_SUCCESS:
			return {
				...state,
				saving: false,
			};
		case types.SAVE_FAILURE:
			return {
				...state,
				error: action.error.message,
				saving: false,
			};
		default:
			return state;
	}
};

export default reducer;
