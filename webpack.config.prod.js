/**
 @code for terminal 
 webpack --config webpack.config.prod.js --progress --colors
*/

var webpack               = require('webpack');
var path                  = require('path');
var src                   = path.resolve(__dirname, './src');
var dist                  = path.resolve(__dirname, './dist');
var modules               = path.resolve(__dirname, 'node_modules');
var autoprefixer          = require('autoprefixer');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  devtool: 'source-map',
  context: path.resolve(__dirname, './src'),

  entry: {
    app: src + "/app.js"
  },

  output: {
    filename: 'js/social-post.[name].min.js',
    chunkFilename: 'js/chunk/[id][chunkhash:8].min.js',
    path: dist,
    publicPath: "/"
  },
/*
  output: {
    filename: '[name].[hash].js',
    chunkFilename: 'chunk/[id][chunkhash:8].js',
    path: dist,
    publicPath: "/"
  },
*/
  externals: {
    'react'     : 'React',
    'react-dom' : 'ReactDOM'
  },

  /*
  resolve: {
      alias: {},
      modules: []
  },
  */

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: modules,
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
            //"transform-decorators-legacy",
            "transform-es2015-template-literals",
            'transform-async-to-generator',
            'transform-regenerator',
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },

  plugins: [

    /*
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
         // this assumes your vendor imports exist in the node_modules directory
         return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new ExtractTextPlugin("/css/social-post.min.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]       
      }
    })
  ]
};



