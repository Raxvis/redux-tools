import Type from './Type';
import actionCreatorCreator from './../actionCreatorCreator';
import { snakeToCamelCase } from './../utils';

class Async extends Type {
	actions() {
		const types = this.types();

		return Object.keys(types).reduce(
			(actions, name) => ({
				...actions,
				[snakeToCamelCase(name)]: actionCreatorCreator(types[name]),
			}),
			{},
		);
	}

	types() {
		return {
			[`${this.name}_REQUEST`]: `${this.namespace}${this.name}_REQUEST`,
			[`${this.name}_FAILURE`]: `${this.namespace}${this.name}_FAILURE`,
			[`${this.name}_SUCCESS`]: `${this.namespace}${this.name}_SUCCESS`,
		};
	}
}

export default Async;
