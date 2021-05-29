module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
        .test(/\.vue$/)
        .use('vue-loader')
        .tap((options) => ({
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        }));

    config.module
      .rule('raw')
        .test(/\.txt$/)
        .use('raw-loader')
        .loader('raw-loader');
  },
};
