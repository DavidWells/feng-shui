import webpack from 'webpack'
import path from 'path'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true,
}

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './demo/index',
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.htmlnew webpack.HotModuleReplacementPlugin())
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'demo'),
        ],
        loaders: ['babel'],
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader']},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: require('./postcss.config'),
}
