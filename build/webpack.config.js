const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
const devMode = process.argv.indexOf('--mode=production') === -1;
module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],    // 入口文件
  output: {
    // publicPath: '.',
    filename: './js/[name].[hash:8].js',      // 打包后的文件名称
    path: path.resolve(__dirname, '../dist'),  // 打包后的目录
    chunkFilename: './js/[name].[hash:8].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CleanWebpackPlugin({}),
    // new MiniCssExtractPlugin({
    //   filename: "./css/[name].[hash].css",
    //   chunkFilename: "[id].css",
    // }),
    new MiniCssExtractPlugin({
      filename: devMode ? './css/[name].css' : './css/[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new vueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // 从右向左解析原则
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] // 从右向左解析原则
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      ' @': path.resolve(__dirname, '../src')
    },
    extensions: ['*', '.js', '.json', '.vue']
  },


}

