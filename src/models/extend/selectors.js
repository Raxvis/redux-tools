const extendSelectors = (first, second) => ({
	...first.selectors,
	...second.selectors,
});

export default extendSelectors;
