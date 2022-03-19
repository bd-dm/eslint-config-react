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
	plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
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
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
	},
};
