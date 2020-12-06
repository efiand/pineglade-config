'use strict';

module.exports = {
	codeguide: {
		eslint: require('eslint-config-pineglade'),
		stylelint: require('./stylelint'),
		htmlhint: require('./htmlhint')
	},
	config: {
		htmlmin: require('./htmlmin'),
		svgo: require('./svgo')
	}
};
