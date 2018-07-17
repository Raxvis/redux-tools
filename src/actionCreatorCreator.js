export const actionCreatorCreator = (type) => (payload) => ({
	payload,
	type,
});

export default actionCreatorCreator;
