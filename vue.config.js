const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  pages: {
    bundle: {
      entry: './src/index.ts',
      template: './src/assets/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    proxy: { '^/api': { target: 'http://localhost:8080', pathRewrite: {'^/api' : ''} } }
  },
  chainWebpack: ({ module }) => {
    const setFileloader = (...rules) => rules.map((rule) => {
      return module.rule(rule).uses.clear().end().oneOfs.clear().end().use('file-loader').loader('file-loader').tap(() => ({ name: `${rule}/[name].[hash:8].[ext]` }))
    })

    setFileloader('images', 'svg', 'media', 'fonts', 'css')
  },
  configureWebpack: {
    plugins: [new CompressionWebpackPlugin()]
  }
}
