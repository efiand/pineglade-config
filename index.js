'use strict';

const codeguide = {
	eslint: require('eslint-config-pineglade'),
	stylelint: require('./stylelint'),
	htmlhint: require('./htmlhint')
};

const config = {
	htmlmin: require('./htmlmin'),
	svgo: require('./svgo')
};

module.exports = {
	codeguide, // for compatibility
	config, // for compatibility
	gulp: {
		DEST: 'build',
		ESLINT: {
			fix: false
		},
		HTMLHINT: codeguide.htmlhint,
		HTMLMIN: config.htmlmin,
		JPEGOPTIM: {
			max: 80,
			progressive: true
		},
		LINTSPACES: {
			editorconfig: '.editorconfig'
		},
		SERVER: {
			cors: true,
			notify: false,
			ui: false
		},
		STYLELINT: {
			reporters: [
				{
					console: true,
					formatter: 'string'
				}
			]
		},
		SVGO: config.svgo,
		SVGSTORE: {
			inlineSvg: true
		},
		WEBP: {
			quality: 80
		},
		WEBPACK: {
			mode: 'production',
			module: {
				rules: [
					{
						test: /\.js$/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [
									[
										'@babel/preset-env'
									]
								]
							}
						}
					}
				]
			},
			optimization: {
				minimize: true
			}
		}
	}
};
