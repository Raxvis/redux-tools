import { actionCreatorCreator } from 'redux-tools';

export const types = {
	ADD_TODO: 'todos/ADD_TODO',
	DELETE_TODO: 'todos/DELETE_TODO',
	UPDATE_TODO: 'todos/UPDATE_TODO',
};

export const actions = {
	addTodo: actionCreatorCreator(types.ADD_TODO),
	deleteTodo: actionCreatorCreator(types.DELETE_TODO),
	updateTodo: actionCreatorCreator(types.UPDATE_TODO),
};

export default actions;
