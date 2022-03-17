const { defineConfig } = require('@vue/cli-service')
// var ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/en',
    outputDir : 'dist',
    pwa: {
        name: 'الهوية العربية',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        // workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            skipWaiting: false
        },
    },

    transpileDependencies: true,
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: true,
            runtimeOnly: false,
            compositionOnly: true,
            fullInstall: true
        }
    },
    // plugins: [
    //     // Make sure that the plugin is after any plugins that add images
    //     new ImageminPlugin({
    //       disable: process.env.NODE_ENV !== 'production', // Disable during development
    //       pngquant: {
    //         quality: '95-100'
    //       }
    //     })
    //   ]
});