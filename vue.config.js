// vue.config.js file to be place in the root of your repository

module.exports = {
  assetsDir: 'assets',
  css: {
    requiredModuleExtensions: false,
    loaderOptions: {},
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  }
};
