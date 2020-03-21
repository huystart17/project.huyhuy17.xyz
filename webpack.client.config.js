const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    target: 'browser',
    mode: 'development',

    entry: {
        app: './src/client_src/index.js',
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
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/assets'),
    },
};
