const extendTypes = (first, second) => ({
	...first.types,
	...second.types,
});

export default extendTypes;
