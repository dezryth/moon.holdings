/* eslint-disable no-console */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import chalk from 'chalk';

const moonholdings = path.resolve(__dirname, 'moonholdings');
const app = path.resolve(__dirname, 'app');
const nodeModules = path.resolve(__dirname, 'node_modules');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'moonholdings.css',
  disable: false,
  allChunks: true
});

const CopyWebpackPluginConfigOptions = [{
  from: 'app/static',
  to: 'static/'
}];

const CopyWebpackPluginConfig = new CopyWebpackPlugin(CopyWebpackPluginConfigOptions);

const PATHS = {
  app,
  build: moonholdings
};

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  // entry: ['babel-polyfill', PATHS.app],
  entry: './app/index.tsx',
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  resolve: {
    modules: [app, nodeModules],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: moonholdings
  },
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig
  ]
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    productionPlugin
  ]
};

console.log(`${chalk.magenta('฿')} ${chalk.green('yarn run:')} ${chalk.red(LAUNCH_COMMAND)}`);

export default Object.assign(
  {}, base,
  isProduction === true ? productionConfig : developmentConfig
);
