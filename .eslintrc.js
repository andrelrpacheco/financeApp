module.exports = {
	env: {
		es2021: true,
	},
	extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'global-require': 0,
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		],
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: false },
		],
	},
}
