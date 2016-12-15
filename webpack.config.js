'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

	entry: [
	        'webpack-dev-server/client?http://localhost:7777',
	        'webpack/hot/only-dev-server',
	        './main.js'
	      ],

	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'bundle.js',
		publicPath :'http://localhost:7777/build/'
	},
   
	devtool: 'source-map',

	devServer: {
		inline: true,
		port: 7777,
		contentBase: './'
	},
   
	plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
		}),
		new webpack.HotModuleReplacementPlugin()
    ],

	module: {
		loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
        },
		{ test: /\.css$/, loader: "style-loader!css-loader" },
		{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
		{ test: /\.ttf$/,    loader: "file-loader" },
		{ test: /\.eot$/,    loader: "file-loader" },
		{ test: /\.svg$/,    loader: "file-loader" },
		{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      ]

	}
};