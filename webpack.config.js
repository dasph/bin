const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = (env, options) => {
  const prod = options.mode === 'production'

  return {
    mode: 'development',
    devtool: false,
    entry: './app/index.tsx',
    resolve: { extensions: ['.js', '.tsx'] },
    output: {
      publicPath: '/',
      path: `${__dirname}/public`,
      filename: `bundle${prod ? '.[contenthash:8]' : ''}.js`,
      clean: prod
    },
    devServer: {
      publicPath: '',
      host: '0.0.0.0',
      historyApiFallback: true,
      proxy: { '/api/': { target: 'http://localhost:8000', pathRewrite: { '^/api/': '' } } }
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', ['@babel/env', { targets: { node: 'current' } }], '@babel/react']
          }
        }
      }, {
        test: /\.(css|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            context: 'app/assets',
            name: `[path][name]${prod ? '.[contenthash:8]' : ''}.[ext]`
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './app/assets/index.html' }),
      ...prod ? [new CompressionWebpackPlugin()] : []
    ]
  }
}
