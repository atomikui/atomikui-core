const path = require('path');
const AutoPrefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const distDir = 'dist';
const assetsDir = 'assets/';

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, distDir),
    libraryTarget: 'umd',
    filename: path.join(assetsDir, '[name].[hash].min.js'),
    chunkFilename: path.join(assetsDir, '[name].[hash].chunk.min.js'),
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname), path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  target: 'web',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join(assetsDir, '[name].[hash].css'),
      chunkFilename: path.join(assetsDir, '[name].[hash].css'),
    }),
  ],
};
