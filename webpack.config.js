const path = require('path')
const webpack = require('webpack')
const jsxLoader = require('styled-jsx/webpack').loader

const outDirectory = path.resolve(__dirname, 'public', 'js')
const serveDirectory = path.resolve(__dirname, 'public')

const configuration = {
  entry: './src/index.tsx',
  output: {
    path: outDirectory,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ]
  },
  devServer: {
    contentBase: serveDirectory,
    publicPath: '/',
    compress: true,
    port: 4444
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|pcss)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: jsxLoader,
            options: { type: 'scoped' }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader"
          }
        ]
      }
    ]
  }
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
}

module.exports = configuration
