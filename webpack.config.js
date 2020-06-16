const pkg = require('./package.json')
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SriPlugin = require('webpack-subresource-integrity')

const htmlConfig = require('./html.config.json') || {}
const outputPath = resolve(__dirname, './dist')
const publicPath = resolve(__dirname, './public')

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? false : 'eval-source-map',
  entry: resolve(__dirname, './src/main.ts'),
  output: {
    path: outputPath,
    crossOriginLoading: 'anonymous'
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 32000,
      maxSize: 48000
    }
  },
  module: {
    rules: [{
      test: /\.vue$/i,
      use: 'vue-loader'
    }, {
      test: /\.ts$/i,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif)$/i,
      loader: 'url-loader',
      options: { limit: 8192 }
    }, {
      test: /\.(png|jpg|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name (/*resourcePath, resourceQuery*/) {
          // see https://github.com/webpack-contrib/file-loader
          // `resourcePath` - `/absolute/path/to/file.js`
          // `resourceQuery` - `?foo=bar`
          return env.prod ? '[contenthash].[ext]' : '[path][name].[ext]'
        }
      }
    }, {
      test: /\.(txt|raw)$/i,
      use: 'raw-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': '@vue/runtime-dom',
      '@': resolve(__dirname, './src/'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: publicPath, to: outputPath }]
    }),
    new HtmlWebpackPlugin({
      title: htmlConfig.title || pkg.name,
      meta: htmlConfig.meta || {},
      // TODO: not setting template option kinda breaks the build
      template: resolve(__dirname, htmlConfig.template || './index.html'),
      scriptLoading: htmlConfig.scriptLoading || 'defer',
      hash: true
    }),
    new FaviconsWebpackPlugin({
      logo: htmlConfig.logo || './logo.png',
      // see https://github.com/itgalaxy/favicons#usage
      favicons: htmlConfig.favicons || {}
    }),
    new SriPlugin({
      hashFuncNames: ['sha512'],
      enabled: env.prod
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: resolve(__dirname, 'dist'),
    overlay: true
  }
})
