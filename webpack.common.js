const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/i,
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "static/images",
                            name: "[name].[hash].[ext]",
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            generator: (content) =>
                                svgToMiniDataURI(content.toString()),
                            outputPath: "static/svgs",
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
