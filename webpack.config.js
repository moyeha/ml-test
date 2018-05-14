// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// })

// module.exports = {
//     target: 'web',
//     entry: ['./src/index.js'],
//     output: {
//         publicPath: '/',
//         path: resolve(__dirname, '..', 'build', 'client'),
//         filename: '[name].js'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         },
//         {
//             test: /\.css$/,
//             use: [
//                 {
//                     loader: "style-loader"
//                 },
//                 {
//                     loader: "css-loader",
//                     options: {
//                         modules: true,
//                         importLoaders: 1,
//                         localIdentName: "[name]_[local]_[hash:base64]",
//                         sourceMap: true,
//                         minimize: true
//                     }
//                 },
//                 {
//                 loader: 'postcss-loader', // Run post css actions
//                 options: {
//                     plugins: function () { // post css plugins, can be exported to postcss.config.js
//                     return [
//                         require('precss'),
//                         require('autoprefixer')
//                     ];
//                     }
//                 }
//                 }, {
//                 loader: 'sass-loader' // compiles Sass to CSS
//                 }
//             ]
//         }
//       ]
//     },
//     plugins: [htmlPlugin]
//   }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/website/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                    require('precss'),
                    require('autoprefixer')
                ];
                }
            }
          }          
        ]
      },      
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }         
        ]
      }
    ]
  },
//   devServer: {
//     port: 3000,
//     open: true,
//     proxy: {
//       '/api': 'http://localhost:8080'
//     }
//   },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
};
