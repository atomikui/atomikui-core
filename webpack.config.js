const path = require('path');
const AutoPrefixer = require('autoprefixer');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';
const buildEvent = process.env.npm_lifecycle_event;

let buildDir;
let cssBuildPath;

switch (buildEvent) {
  case 'build:styles':
    buildDir = './dist/styles';
    cssBuildPath = 'react-component-library.css';
    break;
  default:
    buildDir = './styles';
    cssBuildPath = 'styles/react-component-library.css';
}

module.exports = {
  mode: !prod ? 'development' : 'production',
  entry: [path.resolve(__dirname, 'src/styles/main.scss')],
  output: {
    path: path.resolve(__dirname, buildDir),
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
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: cssBuildPath,
      chunkFilename: '[id].css',
    }),
  ],
};
