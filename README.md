# Redux Tools

Redux Tools to make redux easy.

## Getting Started

Please view the example folder or continue for getting started.

## Models

### The Problem

Does this folder structure look familiar to you?

```
src/
	actions/
		index.js
		products.js
		user.js
	components/
		App.js
		Header.js
		Product.js
	reducers/
		index.js
		products.js
		user.js
	selectors/
		index.js
		products.js
		user.js
	types/
		index.js
		products.js
		user.js
	index.js
	store.js
```

This is the basic organization shown in many different redux tutorials and examples. This works great until, one day, it doesn't. It becomes cumbersome to make changes in multiple folders when you're only really updating one **thing**. This is where models come in.

### The Solution

The solution is to place things together by domain rather than type. Data fetching, updating, creating, calculating for a domain all lives inside one model. This includes actions, types, reducers, selectors, sagas. So that example app structure using models would look like this:

```
src/
	components/
		App.js
		Header.js
		Product.js
	models/
		products/
			actions.js
			index.js
			reducer.js
			sagas.js
			selectors.js
		user/
			actions.js
			index.js
			reducer.js
			sagas.js
			selectors.js
		index.js
	index.js
	store.js
```

## TODO

withErrorReporting: extend to allow raygun / crashalitics / error reporting system
withRetry: extend to allow raygun / crashalitics / error reporting system
