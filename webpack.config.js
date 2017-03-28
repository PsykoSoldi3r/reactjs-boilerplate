var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var BUILD_DIR = path.resolve(__dirname, 'compiled');
var APP_DIR = path.resolve(__dirname, 'source');

var config = {
    entry: APP_DIR + '/modules/AppModule.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.png$/,
                loader: ['url-loader?minetype=image/png']
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin({})
    ]
};

module.exports = config;