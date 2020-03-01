const path = require('path');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: "dist/[name].[chunkhash].js",
        path: __dirname + '/dist',
        publicPath: '/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    mode: "development",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions. 需要解析的文件格式
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js?$/,
                loader: 'source-map-loader'
            },
            // css loader
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // config webpack-dev-server
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: false,
        https: false, // https服务开启
        disableHostCheck: true, // host检查关闭
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            template: './index.html',
            filename: 'index.html'
        })
    ]
}
