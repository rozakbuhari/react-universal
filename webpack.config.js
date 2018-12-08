const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'production';
const isProd = mode === 'production';

module.exports = {
	mode: mode,
	entry: './src/client/index.js',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['public']),
		(!isProd) && new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			templateParameters: {
				title: 'Universal React',
				content: ''
			}
		}),
		new Dotenv()
	].filter(Boolean),
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000
	},
	performance: {
		hints: false
	}
};
