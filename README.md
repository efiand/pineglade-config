# pineglade-config [![npm version](https://img.shields.io/npm/v/pineglade-config.svg)](https://www.npmjs.com/package/pineglade-config)

Набор повторяющихся из проекта в проект настроек кодгайда и сборок, рекомендованных стандартами и проверенных временем.

## Установка

```bash
npm i -DE pineglade-config
```

## Использование в .stylelintrc

```json
{
	"extends": [
		"pineglade-config/stylelint"
	]
}
```

## Использование в .eslintrc

```json
{
	"extends": [
		"eslint:all",
		"pineglade-config/eslint"
	]
}
```

## Использование в gulpfile.js, webpack.config.js и т. п.

```js
const { codeguide, config } = require(`pineglage-config`);

// codeguide.eslint
// codeguide.stylelint
// codeguide.htmlhint
// config.htmlmin
// config.svgo
```
