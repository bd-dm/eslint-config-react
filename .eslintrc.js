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
	env: {
		jest: true,
		browser: true,
		node: true,
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
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"],
		"react/require-default-props": "off",
		"react/button-has-type": "off",
		"react/jsx-props-no-spreading": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
		"react/prop-types": "off",
	},
};
