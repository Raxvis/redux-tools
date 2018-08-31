import { actionCreatorCreator } from 'redux-tools';

export const types = {
	ADD_LIST: 'lists/ADD_LIST',
	DELETE_LIST: 'lists/DELETE_LIST',
	SET: 'lists/SET',
	UPDATE_LIST: 'lists/UPDATE_LIST',
};

export const actions = {
	addList: actionCreatorCreator(types.ADD_LIST),
	deleteList: actionCreatorCreator(types.DELETE_LIST),
	set: actionCreatorCreator(types.SET),
	updateList: actionCreatorCreator(types.UPDATE_LIST),
};

export default actions;
