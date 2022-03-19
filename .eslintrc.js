module.exports = {
	extends: [
		"airbnb",
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	plugins: ["react-hooks"],
	rules: {
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		quotes: ["error", "double"],
	},
};
