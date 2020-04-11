const path = require('path');
const AutoPrefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'production',
  entry: [path.resolve(__dirname, 'src/styles/main.scss')],
  output: {
    path: path.resolve(__dirname, './dist/styles'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(s?css|sass)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !prod,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return AutoPrefixer;
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'react-component-library.css',
    }),
  ],
};
