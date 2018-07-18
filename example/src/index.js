import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { store } from './store';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
