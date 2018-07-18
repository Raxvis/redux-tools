import { compose, createStore } from 'redux';
import { reducer } from './redux';

export const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : (func) => func));
