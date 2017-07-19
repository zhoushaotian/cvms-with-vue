'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'app/build/main.js'),
    output: {
        path: path.resolve(__dirname, 'app/public/static/js'),
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                    },
                }

            },
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'build')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('../css/appstyle.css')
    ]
};