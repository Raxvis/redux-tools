import { Basic } from 'redux-tools/types';
import { generateActionsAndTypes } from 'redux-tools';

export const { actions, types } = generateActionsAndTypes('todos', [
	new Basic('SET'),
	new Basic('ADD_TODO'),
	new Basic('DELETE_TODO'),
	new Basic('UPDATE_TODO'),
]);
