module.exports = {
	extends: ['airbnb', 'prettier'],
	rules: {
		'react/jsx-filename-extension': 'off',
		// You can override any rules you want
		'react/function-component-definition': 'off',
		'react/prop-types': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
};
