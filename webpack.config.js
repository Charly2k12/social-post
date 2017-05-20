/**
 @code for terminal 
 npm start || webpack-dev-server --hot --inline
 webpack --config webpack.config.js --progress --colors
*/

var webpack               = require('webpack');
var path                  = require('path');
var src                   = path.resolve(__dirname, './src');
var dist                  = path.resolve(__dirname, './public');
var modules               = path.resolve(__dirname, 'node_modules');
var BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

  devtool: 'source-map',
  context: src,

  entry: [

    'react-hot-loader/patch', 
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    src + "/app.js",
  ],

  output: {
    filename: "app.js",
    //filename: '[name].js',
    chunkFilename: 'chunk/[id][chunkhash:8].js',
    path: dist + "/assets/js/",
    publicPath: "http://localhost:8080/"
  },

  // externals: {},
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'public'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
    /*
    proxy: {
      '*': 'http://localhost:9000'
    }
    */
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: modules,
        //include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                'stage-3',
                'stage-1',
                'stage-0',
                'es2015', 
                'react'
              ],
              plugins: [
                "syntax-dynamic-import",
                "transform-runtime",
                "transform-class-properties",
                "transform-decorators-legacy",
                "transform-es2015-template-literals",
                'transform-async-to-generator',
                'transform-regenerator',
                //{modules: false}
              ]
            }
          }
        ]
      }
    ]
  }
};



