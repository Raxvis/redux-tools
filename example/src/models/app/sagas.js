import { api, persist } from 'redux-tools';
import { asyncSaga, forkSafely } from 'redux-tools/sagas';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import lists from './../lists';
import todos from './../todos';
import { types } from './actions';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const save = function* save() {
	const state = yield select();

	yield call(delay, 1000);

	yield call(persist.set, 'todos', state.todos);
	yield call(persist.set, 'lists', state.lists);
};

const load = function* load() {
	const todosData = yield call(persist.get, 'todos');
	const listsData = yield call(persist.get, 'lists');
	const response = yield call(api.get, 'https://jsonplaceholder.typicode.com/todos/1');

	console.log(response);

	yield put(todos.actions.set(todosData));
	yield put(lists.actions.set(listsData));
};

const rootSaga = function* rootSaga() {
	yield forkSafely(takeEvery, types.INIT, load);
	yield forkSafely(takeEvery, types.SAVE_REQUEST, asyncSaga(save));
};

export default rootSaga;
