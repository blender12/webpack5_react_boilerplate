const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
    },  
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack',
          template: path.resolve(__dirname, './src/template.html'), // template file
          filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({ extensions: ["js", "jsx"]}),
      ],
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          // JavaScript
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          //images
          {
              test:/\.(?:jpg|png|gif|ico)$/i,
              type:'assest/resource',
          },
          {
              test:/\.(scss|css)$/,
              use:['style-loader', 'css-loader','sass-loader']
          },
        ],
      },
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  