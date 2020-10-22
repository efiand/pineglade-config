'use strict';

const SVGO_PLUGINS_CONFIG = {
	floatPrecision: 2
};

module.exports = {
	plugins: [
		{ removeViewBox: false },
		{ removeTitle: true },
		{ cleanupNumericValues: SVGO_PLUGINS_CONFIG },
		{ convertPathData: SVGO_PLUGINS_CONFIG },
		{ transformsWithOnePath: SVGO_PLUGINS_CONFIG },
		{ convertTransform: SVGO_PLUGINS_CONFIG },
		{ cleanupListOfValues: SVGO_PLUGINS_CONFIG }
	]
};
