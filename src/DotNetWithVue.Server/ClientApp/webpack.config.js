/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {

    return {
        entry: "./index.js",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.bundle.[contenthash:8].js'
        },
        mode: env.production ? 'production' : 'development',
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 8080,
            proxy: {
                '/api': {
                    target: 'https://localhost:7116',
                    changeOrigin: true,
                    logLevel: 'debug',
                    // pathRewrite: { '^/api': '' },
                    secure: false,
                },
            },
        },
        resolve: {
            extensions: ['*', '.js', '.vue', '.wasm', '.json', '.tsx', '.ts'],
            alias: {
                'vue': 'vue/dist/vue.js'
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // css-loader只负责将css文件进行加载
                    // style-loader负责将样式添加到DOM中，要放在css-loader的前面
                    // webpack在使用多个loader时，是按照从右向左（或者说从下到上）的顺序使用
                    use: [env.production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        optimization: {
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                `...`,
                new CssMinimizerPlugin(),
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                // 配置title属性
                title: "Vue Pages",
                // Template
                template: "./index.html",
                // js插入的位置，true/'head'/'body'/false
                inject: 'body',
                // favicon position
                favicon: './images/favicon.ico',
                minify: false,
            }),
            // Vue page file load plugin
            new VueLoaderPlugin(),
            // 清空输出目录
            ...(env.production ? [new CleanWebpackPlugin()] : []),
            new MiniCssExtractPlugin({
                filename: "style.[contenthash:8].css",
            }),
        ]
    }
};