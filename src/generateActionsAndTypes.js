const generateActionsAndTypes = (namespace, types) => {
	types.forEach((type) => type.setNamespace(namespace));

	return {
		actions: types.reduce(
			(actions, type) => ({
				...actions,
				...type.actions(),
			}),
			{},
		),
		types: types.reduce(
			(result, type) => ({
				...result,
				...type.types(),
			}),
			{},
		),
	};
};

export default generateActionsAndTypes;
