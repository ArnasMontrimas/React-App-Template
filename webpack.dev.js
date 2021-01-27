const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        open: true,
        liveReload: false,
        hot: true,
    },
});
