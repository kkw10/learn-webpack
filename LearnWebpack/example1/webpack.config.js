var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],  
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { 
            loader: 'css-loader',
            options: {
              modules: true
            } 
          }          
        ]
      }
    ]
  },
}