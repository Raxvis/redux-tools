/* global fetch */
/* eslint max-params:off */
import { getPlatform, platforms } from './utils';

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

	const response = await fetch(url, getRequest(method, payload, options));
	const jsonResponse = await response.json();

	return jsonResponse;
};

export const del = (url, payload, options) => api('DELETE', url, payload, options);
export const get = (url, options) => api('GET', url, null, options);
export const post = (url, payload, options) => api('POST', url, payload, options);
export const put = (url, payload, options) => api('PUT', url, payload, options);
export const remove = (url, payload, options) => api('DELETE', url, payload, options);

export const urlEncodeParams = (params) =>
	Object.keys(params)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
		.join('&');

export default {
	del,
	get,
	post,
	put,
	remove,
	urlEncodeParams,
};
