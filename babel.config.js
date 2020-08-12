const yargs = require('yargs').argv

module.exports = api => {
	api.cache(true)

	const isTest = yargs['$0'].includes('jest')
	const isProduction = yargs.mode === 'production'

	const plugins = [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-optional-chaining"
	]

	isProduction && plugins.push([
		"react-remove-properties",
		{
			"properties": ['data-testid']
		}
	])

	return {
		plugins,
		presets: [
			[
				"@babel/preset-env",
				{ modules: isTest && 'commonjs' || false }
			],
			"@babel/preset-react"
		]
	}
}
