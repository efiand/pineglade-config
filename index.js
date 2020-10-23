'use strict';

module.exports = {
	codeguide: {
		stylelint: require(`./stylelint`),
		htmlhint: require(`./htmlhint`)
	},
	config: {
		htmlmin: require(`./htmlmin`),
		svgo: require(`./svgo`)
	}
};
