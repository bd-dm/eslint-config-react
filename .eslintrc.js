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
	parser: "@typescript-eslint/parser",
	plugins: ["react", "react-hooks", "@typescript-eslint"],
	rules: {
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		quotes: ["error", "double"],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [
			"error",
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
			},
		],
	},
};
