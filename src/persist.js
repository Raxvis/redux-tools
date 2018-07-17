/* global window */
import { backupStorage, getPlatform, platforms } from './utils';

let storage = getPlatform() === platforms.BROWSER && window.localStorage ? window.localStorage : backupStorage;

storage = getPlatform() === platforms.REACT_NATIVE ? require('react-native').AsyncStorage : storage;

export const clear = async () => {
	await storage.clear();
};

export const del = async (key) => {
	await storage.removeItem(key);
};

export const get = async (key) => {
	const data = await storage.getItem(key);

	return JSON.parse(data);
};

export const set = async (key, value) => {
	if (typeof value === 'object' && Object.keys(value).length > 0) {
		await storage.setItem(key, JSON.stringify(value));
	} else if (Array.isArray(value) && value.length > 0) {
		await storage.setItem(key, JSON.stringify(value));
	} else if (value) {
		await storage.setItem(key, JSON.stringify(value));
	}
};

export default {
	clear,
	del,
	get,
	set,
};
