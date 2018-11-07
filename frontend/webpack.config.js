const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')

const backendHost = 'localhost:8080'

module.exports = {
  entry: [ //'webpack-dev-server/client?http://localhost:8008',
    //'webpack/hot/only-dev-server',
    './index.js'
  ],
  plugins: [
    //new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader?limit=10',
      },

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '../backend/src/main/resources/static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    https: false,
    inline: true,
    port: 8008,
    host: '0.0.0.0',
    contentBase: '../backend/src/main/resources/static',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    proxy: {
      '/api/*': {
        target: 'http://' + backendHost + '/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
};

