const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    target: 'node',
    mode: 'development',

    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    stats: {
        warnings: false,
        colors: true
    },
    watch: true,
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({title: 'Development',}),
    ],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'bin'),
    },
};
