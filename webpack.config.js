const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: {
    javascript: path.resolve(__dirname, 'src/app.js'),
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
  },

  devServer: {
    contentBase: 'dist',
    port: 3000,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [require('./postcss.config')] },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug'),
      filename: 'index.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ja.pug'),
      filename: 'index.ja.html',
      inject: true,
    }),
  ],
}
