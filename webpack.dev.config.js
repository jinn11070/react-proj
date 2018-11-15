/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    /* index.js 파일 내부 import 되는 모든 파일 묶겠음. */
    entry: [
        './client/index.js',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8080', // 개발서버의 포트가 이 부분에 입력되어야 제대로 작동합니다
        'webpack/hot/only-dev-server'
    ],
    /* 파일 하나로 묶어서 export 하는 곳 */
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    /* 개발서버 설정관련 */
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './dist',
        proxy: {
            "**": "http://localhost:3000" // express 서버주소
        },
        stats: {
            // 콘솔 로그를 최소화 합니다
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    /* babel 관련 */
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
    }
}