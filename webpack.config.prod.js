/**
 @code for terminal 
 webpack --config webpack.config.prod.js --progress --colors
*/

var BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack               = require('webpack');
var path                  = require('path');
var src                   = path.resolve(__dirname, './src');
var modules               = path.resolve(__dirname, 'node_modules');

module.exports = {

  devtool: 'source-map',
  context: path.resolve(__dirname, './src'),

  entry: [
    src + "/app.js"
  ],

  output: {
    filename: '[name].[hash].js',
    chunkFilename: 'chunk/[id][chunkhash:8].js',
    path: path.resolve(__dirname, './dist' ),
    publicPath: "/"
  },

  externals: {
    //'ajv': 'Ajv',
    //'moment': 'moment'
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
    })
  ]
};



