const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: process.env.NODE_ENV || 'production',
	entry: './src/server.js',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'server.js'
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.ejs$/, 
				loader: 'ejs-loader'
		}
		]
	}
};
