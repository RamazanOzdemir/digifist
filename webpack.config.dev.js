const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');
const port = 3000;

module.exports = (env, options) => {
  return merge(common, {
    mode: 'development',
    devServer: {
      port,
      static: path.join(__dirname, 'dist'),
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          loader: 'file-loader',
          options: {
            publicPath: `http://localhost:${port}/assets`,
            name: '[path][name].[ext]',
            context: path.resolve(__dirname, 'src/assets'),
            emitFile: false
          }
        }
      ]
    }
  });
};
