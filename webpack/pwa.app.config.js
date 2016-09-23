const path = require('path');
const webpack = require('webpack');


const webpack = require('webpack');
const path = require('path');
const argv = require('yargs').argv;

var env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
//TODO: use NODE_ENV or argsv for both server and extension
env = argv.env ? argv.env : env;

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  })
];

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

module.exports = {
  plugins: plugins,
  resolve: resolve,
  module: module_obj,
  env: env
};




var devtool = 'source-map';

var entry = [
  path.join(__dirname, '../app/assets/javascripts/pwa/ProgressiveApp.js')//,
  //path.join(__dirname, '../app/assets/javascripts/core/core.js') // Your appʼs entry point
];

var plugins = base.plugins;
plugins.push(
  new webpack.ProvidePlugin({
    "React": "react",
  })
);

if(base.env === 'production' || base.env === 'staging') {
  devtool = '';
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false
      }
    })
  );
}

plugins.push(
	new webpack.NoErrorsPlugin()
);

module.exports = {
	entry: entry,
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, '../public/pwa/'),
		filename: 'pwa-bundle.js'
	},
	resolve: base.resolve,
	module: base.module,
	plugins: plugins
};
