# Redux Tools

Redux Tools: to make redux easy and reduce boilerplate with useful tools and conventions.

## Getting Started

Please view the example folder or continue to get a quick introduction or continue reading.

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

This is the basic organization shown in many different redux tutorials and examples. This works great until, one day, it doesn't. It becomes cumbersome to make changes across multiple folders when you're only really updating one **thing**. This is where models come in.

### The Solution

The solution is to place things together by domain rather than type. All fetching, updating, and calculating for a domain lives inside one model. This includes actions, types, reducers, selectors, sagas. So that example app structure using models would look like this:

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

### Model Conventions

A model can be a folder with separate files for actions, reducer, selectors, etc. Or for simple models just a single file may be all you need (similar to [Ducks](https://github.com/erikras/ducks-modular-redux) in many ways). At the end of the day it will be an object with one or several of the following keys (each piece is optional):

-   **actions**
    -   an object where each key is an action creator function
-   **reducer**
    -   a reducer function for a branch of the state object, usually with the same name as the model itself
-   **sagas**
    -   a single saga function that will be forked by the root reducer
-   **selectors**
    -   an object of selector functions related to the model
-   **types**
    -   an object of `SNAKE_CASE` keys and `namespace/SNAKE_CASE` values for use in reducers and sagas (and anywhere else you need them)

Next let's look at each piece in a little more detail.

## Actions and Types

This is what a typical definition for a type and action looks like:

```javascript
const SET_FIRST_NAME = 'user/SET_FIRST_NAME';
const setFirstName = (payload) => ({
	payload,
	type: SET_FIRST_NAME,
});
```

And that gets even more repetitive when you start dealing with asynchronous actions:

```javascript
const SAVE_REQUEST = 'user/SAVE_REQUEST';
const SAVE_SUCCESS = 'user/SAVE_SUCCESS';
const SAVE_FAILURE = 'user/SAVE_FAILURE';
const saveRequest = (payload) => ({
	payload,
	type: SAVE_REQUEST,
});
const saveSuccess = (payload) => ({
	payload,
	type: SAVE_SUCCESS,
});
const saveFailure = (payload) => ({
	payload,
	type: SAVE_FAILURE,
});
```

That repetition was a source of great angst for us so we thought there's a great opportunity for convention and tooling to reduce boilerplate.

The first step was to decide that since actions and types are so closely related anyway, why don't we explicitly couple them together?

### Action and Type Conventions

-   **actions have a `type` and a `payload`**. Action creators will always accept a single parameter that will be placed onto the `payload` key of the action object.
-   **types will be `SNAKE_CASE` with a `namespace` of any case**
-   **action creators will have the `camelCase` version of the type's `SNAKE_CASE`** value.
-   **action creators will be generated automatically from types**

So using our conventions and adding in `redux-tools` tooling, we can greatly reduce the boilerplate for creating actions and types. Here's an equivalent of the above two examples:

```javascript
import { Async, Basic } from 'redux-tools/types';
import { generateActionsAndTypes } from 'redux-tools';

const { actions, types } = generateActionsAndTypes('user', [
	new Async('SAVE')
	new Basic('SET_FIRST_NAME'),
]);
```

## TODO

withErrorReporting: extend to allow raygun / crashalitics / error reporting system
withRetry: extend to allow raygun / crashalitics / error reporting system
