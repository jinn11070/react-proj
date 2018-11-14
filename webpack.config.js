/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    /*index.js 파일 내부 import 되는 모든 파일 묶겠음.*/
    entry: [
        'react-hot-loader/patch',
        './client/index.js'
    ],
    /*babel 관련*/
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] 
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            includePaths: [path.resolve(__dirname, "client/scss")]
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    /*파일 하나로 묶어서 export 하는 곳*/
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}