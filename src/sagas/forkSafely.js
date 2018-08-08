import { fork } from 'redux-saga/effects';
import wrapSagaSafely from './wrapSagaSafely';

const sagaHelpers = ['takeEvery', 'takeLatest', 'takeLatestPerKey'];

const forkSafely = (sagaHelper, ...args) => {
	if (sagaHelper.name === 'throttle') {
		const [ms, fn, pattern, saga, ...rest] = args;

		return fork(sagaHelper, ms, fn, pattern, wrapSagaSafely(saga), ...rest);
	} else if (sagaHelpers.includes(sagaHelper.name)) {
		const [pattern, saga, ...rest] = args;

		return fork(sagaHelper, pattern, wrapSagaSafely(saga), ...rest);
	}

	return fork(wrapSagaSafely(sagaHelper), ...args);
};

export default forkSafely;
