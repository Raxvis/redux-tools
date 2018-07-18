import { createModels } from 'redux-tools';
import lists from './lists';
import todos from './todos';

export const { actions, reducer, sagas, selectors, types } = createModels({
	lists,
	todos,
});
