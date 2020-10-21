'use strict';

const SVGO_PLUGINS_CONFIG = {
	floatPrecision: 2
};

module.exports = {
	plugins: [
		{ removeViewBox: false },
		{ removeTitle: true },
		{ cleanupNumericValues: Configs.SVGO_PLUGINS_CONFIG },
		{ convertPathData: Configs.SVGO_PLUGINS_CONFIG },
		{ transformsWithOnePath: Configs.SVGO_PLUGINS_CONFIG },
		{ convertTransform: Configs.SVGO_PLUGINS_CONFIG },
		{ cleanupListOfValues: Configs.SVGO_PLUGINS_CONFIG }
	]
};
