const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plug')

module.exports ={
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    }
}