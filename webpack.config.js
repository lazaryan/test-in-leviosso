const yargs = require('yargs').argv
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const WebpackRequireFrom = require('webpack-require-from') // use to build dynamic modules CDN path
const webpack = require('webpack')

const appPath = path.resolve('./app')
const commonPath = path.resolve('./common')

const entry = `${appPath}/index.js`

if (!fs.existsSync(entry)) {
    throw new Error('Index file not found!')
}

const mode = process.env.NODE_ENV = yargs.mode || 'development'

const hot = yargs['$0'].includes('webpack-dev-server')

const boundleFile = 'bundle.js'

const output = {
    path: path.resolve('./dist/'),
    filename: boundleFile,
    publicPath: '/',
    chunkFilename: 'chunks/[id].[chunkhash].js'
}

const HtmlWebpackPluginOptionsFactory = () => Object.assign(
	{
		inject: false,
		template: `pug-loader!${commonPath}/template.pug`,
		resetCss: fs.readFileSync(path.resolve(__dirname, 'node_modules/reset-css/reset.css')),
		hot,
		app: `${boundleFile}`
	},
	hot || mode != 'production' ? {
		inject: true
	} : {
		filename: `./index.html`
	}
)

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["chunks/*"] }),
    new webpack.ProvidePlugin({
        React: 'react'
    }),
    new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
        cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin(HtmlWebpackPluginOptionsFactory())
]

!hot && plugins.push(
    new WebpackRequireFrom({
        variableName: 'window.staticsURL' // Used to dynamically pull static files
    })
)

module.exports = {
    mode,
    entry,
    output,
    plugins,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            ui: path.resolve('./ui/index.js'),
            theme: path.resolve('./ui/theme/index.js'),
            utils: path.resolve(`${commonPath}/utils.js`)
        }
    },
    externals: hot && {} || {
        'react': 'react',
        'react-dom' : 'reactDOM'
    },
    devServer: {
        contentBase: './dist',
        port: 30080,
        host: '127.0.0.1',
		hot: true,
		overlay: true,
		disableHostCheck: true,
		historyApiFallback: true,
		before(app) {
			const mock = fs.existsSync(`${appPath}/mock.js`) && require(`${appPath}/mock.js`)

			mock && Object.entries(mock).map(
				([method, paths]) => Object.entries(paths).map(
					([path, mock]) => app[method](path, bodyParser.json(), (req, res) => setTimeout(() => res.json(mock(req)), 1000))
				)
			)
		}
	}
}
