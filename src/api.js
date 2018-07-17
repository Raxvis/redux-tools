/* global fetch, window */
/* eslint max-params:off */
import { getPlatform, platforms } from './utils';
import { call } from 'redux-saga/effects';

const getURL = (url) => (window && window.url && url.indexOf('http') > -1 ? `${window.url}${url}` : url);

const getRequest = (method, payload, options = {}) => {
	if (options.token) {
		options.headers = options.headers || {};
		options.headers['X-Amz-Security-Token'] = options.token;
		delete options.token;
	}

	if (payload && method.toUpperCase() !== 'GET') {
		options.body = JSON.stringify(payload);
	}

	return {
		...options,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...(options.headers || {}),
		},
		method: method.toUpperCase(),
	};
};

const api = async (method, url, payload, options) => {
	if (getPlatform() === platforms.BROWSER || getPlatform() === platforms.NODE) {
		require('isomorphic-fetch');
	}

	const response = await fetch(getURL(url), getRequest(method, payload, options));
	const jsonResponse = await response.json();

	return jsonResponse;
};

export const del = (url, payload, options) => call(api, 'DELETE', url, payload, options);
export const get = (url, options) => call(api, 'GET', url, null, options);
export const post = (url, payload, options) => call(api, 'POST', url, payload, options);
export const put = (url, payload, options) => call(api, 'PUT', url, payload, options);
export const remove = (url, payload, options) => call(api, 'DELETE', url, payload, options);

export default {
	del,
	get,
	post,
	put,
	remove,
};
