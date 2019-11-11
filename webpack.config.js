const path = require("path")
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    mode: "development",
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
            },
            {   //css
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            {   //static files
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'img',
                    name: '[name].[ext]'
                },
            },
            { 
            test: /\.html$/,
            use: { loader: 'html-loader' }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/app/html/index.html",
            filename: "index.html",
            excludeChunks: ['server']
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    }
}