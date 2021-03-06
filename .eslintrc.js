module.exports = {
	root: true,
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				project: ['tsconfig.json'],
				createDefaultProgram: true,
				tsconfigRootDir: __dirname,
			},
			extends: [
				'plugin:@angular-eslint/recommended',
				'plugin:@angular-eslint/template/process-inline-templates',
				'plugin:prettier/recommended',
			],
			rules: {
				'newline-per-chained-call': 0,
				'function-paren-newline': 0,
				'function-call-argument-newline': 0,
				'arrow-parens': 0,
			},
		},
		{
			files: ['*.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {},
		},
		// NOTE: WE ARE NOT APPLYING @ANGULAR-ESLINT/TEMPLATE IN THIS OVERRIDE, ONLY PRETTIER
		{
			files: ['*.html'],
			excludedFiles: ['*inline-template-*.component.html'],
			rules: {
				// NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
			},
		},
	],
};
