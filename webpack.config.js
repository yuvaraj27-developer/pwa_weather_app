const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(png|ico)?$/,
          use: ['file-loader?name=[name].[ext]']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        filename: 'index.html'
      }),
      new DotEnvPlugin({
        path: '.env',
        systemvars: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
      }),
    ]
  }
}
