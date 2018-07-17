module.exports = {
	collectCoverageFrom: ['src/**.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
	coverageDirectory: 'coverage',
	coverageReporters: ['lcov'],
};
