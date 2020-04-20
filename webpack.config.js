const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')


module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: './app.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: 'dist',
    port: 3000,
    hot: true,
  },

  resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            components: path.join(__dirname, './src/components'),
            'vue$': 'vue/dist/vue.esm.js'
        }
  },

  module: {
    rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['vue-style-loader', 'css-loader', 'less-loader']
        },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      }
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.pug',
      filename: 'index.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './index.ja.pug',
      filename: 'index.ja.html',
      inject: true,
    }),
  ],
}
