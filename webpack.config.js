let nodeExternals = require('webpack-node-externals'),
    path          = require('path'),
    isDev         = process.env['NODE_ENV'] !== 'production';

// ----------------------------------------------------

let config = {
    entry    : {
        'j-cache': './j-cache.js',
    },
    output   : {
        libraryTarget: "commonjs2",
        path         : path.join(__dirname, '/dist'),
        filename     : '[name].js',
    },
    externals: [nodeExternals()],
    module   : {
        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : ['babel-loader'],
            }
        ]
    }

};

// Context config
// ----------------------------------------------------

if(isDev){
    config.watch = true;
}

// ----------------------------------------------------

module.exports = config;