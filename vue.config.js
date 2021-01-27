// vue.config.js
module.exports = {
  css: {
    requireModuleExtension: false,
    sourceMap: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]__[local]__[hash:base64:5]"
        }
      },
      scss: {
        prependData: `@import "@/assets/styles/index.scss";`
      }
    }
  }
};
