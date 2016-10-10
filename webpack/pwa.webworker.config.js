const path = require('path');
const webpack = require('webpack');

var resolve = {
  extensions: ['', '.js', '.jsx']
};

var module_obj = {
  loaders: [{
    test: /\.js?$/,
    exclude: /(node_modules)/,
    loaders: ['babel'],
  }]
};

var entry = [
  path.join(__dirname, '../src/workers/fluxworker.js')//,
];

var plugins = [];
plugins.push(
  new webpack.ProvidePlugin({
    "React": "react",
  })
);

module.exports = {
	entry: entry,
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, '../public/dist/'),
		filename: 'fluxworker-bundle.js'
	},
	resolve: resolve,
	module: module_obj,
	plugins: plugins
};
