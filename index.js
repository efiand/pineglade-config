'use strict';

module.exports = {
	codeguide: {
	  eslint: {
			extends: `eslint:all`,
			...require(`./eslint`)
		},
		stylelint: require(`./stylelint`),
		htmlhint: require(`./htmlhint`)
	},
	config: {
		lintspaces: {
			editorconfig: `.editorconfig`
		},
		htmlmin: require(`./htmlmin`),
		svgo: require(`./svgo`)
	}
};
