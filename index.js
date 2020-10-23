'use strict';

module.exports = {
	codeguide: {
	  eslint: require(`./eslint`),
		stylelint: require(`./stylelint`),
		htmlhint: require(`./htmlhint`)
	},
	config: {
		htmlmin: require(`./htmlmin`),
		svgo: require(`./svgo`)
	},
	depends: [`pineglade-config/stylelint`, `pineglade-config/stylelint`]
};
