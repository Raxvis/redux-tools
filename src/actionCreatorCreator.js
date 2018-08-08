const actionCreatorCreator = (type, meta) => (payload) => ({
	...meta,
	payload,
	type,
});

export default actionCreatorCreator;
