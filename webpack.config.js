const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        action: "./src/Action.mjs",
        pipe: "./src/Pipe.mjs",
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js",
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        }
                    }
                ],
            }
        ],
    },
};