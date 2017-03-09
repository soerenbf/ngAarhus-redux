var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    
    output: {
        path: "./dev",
        publicPath: "http://localhost:8080/",
        filename: "[name].js",
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
});