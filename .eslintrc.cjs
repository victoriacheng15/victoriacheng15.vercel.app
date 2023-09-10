/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["node_modules", "dist"],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"plugin:astro/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				"prettier/prettier": "off",
				"import/no-named-as-default-member": "off",
				"import/no-named-as-default": "off",
			},
		},
		{
			files: ["**/*.mjs"],
			parserOptions: {
				sourceType: "module",
				ecmaVersion: 2015,
			},
			rules: {
				"import/no-extraneous-dependencies": "off",
				"import/no-unresolved": "off",
			},
		},
		{
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
			extends: ["plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/no-unused-vars": [
					"error",
					{ argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
				],
				"@typescript-eslint/no-non-null-assertion": "off",
				"@typescript-eslint/ban-ts-comment": "off",
			},
		},
	],
	rules: {
		"@typescript-eslint/no-var-requires": "warn",
	},
};
