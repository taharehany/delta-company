const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/ar',
    outputDir : 'dist',
    pwa: {
        name: 'الدغيلبي والطلحي',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxOptions: {
            skipWaiting: false
        },
    },
    transpileDependencies: true,

    pluginOptions: {
        i18n: {
            locale: 'ar',
            fallbackLocale: 'ar',
            localeDir: 'locales',
            enableLegacy: true,
            runtimeOnly: false,
            compositionOnly: true,
            fullInstall: true
        }
    }
})
