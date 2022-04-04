const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/ar',
    outputDir : 'dist',
    pwa: {
        name: 'الدغيلبي والطلحي',
        themeColor: '#e3ac2b',
        msTileColor: '#182350',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#e3ac2b',
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
