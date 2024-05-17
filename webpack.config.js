const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

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
          test: /\.(png|jpg)?$/,
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
      new CopyPlugin({
        patterns: [
          { from: 'public/favicon.png', to: 'favicon.png' },
          { from: 'public/background_weather_app.jpg', to: 'background_weather_app.jpg' },
          { from: 'public/manifest.json', to: 'manifest.json' }
        ],
      }),
      new InjectManifest({
        swSrc: './src/service-worker.js',
        swDest: 'sw.js'
      })
    ]
  }
}
