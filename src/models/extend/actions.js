const extendActions = (first, second) => ({
	...first.actions,
	...second.actions,
});

export default extendActions;
