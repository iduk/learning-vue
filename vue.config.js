// vue.config.js
module.exports = {
  css: {
    requireModuleExtension: false,
    sourceMap: true,

    loaderOptions: {
      css: {
        modules: {
          // [name] = file , [local] = class
          localIdentName: "[name]__[local]__[hash:base64:5]"
        }
      },
      scss: {
        prependData: `@import "@/assets/Styles/_variables.scss";`
      }
    }
  }
};
