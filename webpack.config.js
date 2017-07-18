'use strict';
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'app/build/main.js'),
    output: {
        path: path.resolve(__dirname, 'app/public/static/js'),
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'build')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }

};