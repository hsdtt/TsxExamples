var path = require('path');
var webpack = require("webpack");

module.exports = function(env){
    var output = {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '.')
    };
    if(env === "prod"){
        output = {
            filename: 'bundle.min.js',
            path: path.resolve(__dirname, 'dist')
        };
    }

    var plugins;
    if(env === "prod"){
        plugins = [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ];
    }

    return {
        entry: './js/main.js',
        externals: {
            react: 'window.React',
            "react-dom": 'window.ReactDOM'
        },
        output: output,
        plugins: plugins
    }
};