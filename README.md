# Redux Tools

Redux Tools to make redux easy

## TODO

withErrorReporting: extend to allow raygun / crashalitics / error reporting system
withRetry: extend to allow raygun / crashalitics / error reporting system

## Getting Started

Please view the example folder for getting started.

## React App Structure

Redux tools takes a certain stand on structure layout and convention to make the most of redux. The basic concept of this is that state is divided into models. Each model contains its own reducers, actions, sagas and selectors.

```
src/
	components/
		...
	models/
		model/
			actions.js
			index.js
			reducer.js
			sagas.js
			selectors.js
		index.js
	index.js
	store.js
```
