import app from './app';
import { create } from 'redux-tools/models';
import lists from './lists';
import todos from './todos';

export const { actions, reducer, sagas, selectors, types } = create({
	app,
	lists,
	todos,
});
