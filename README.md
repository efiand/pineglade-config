# pineglade-config

Набор удобных настроек. рекомендованных стандартами и проверенных временем, для кодгайда и сборок.

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
// config.lintspaces
// confightmlmin
// config.svgo
```
