const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir : 'dist',
    pwa: {
        name: 'عبدالله الخنفري',
        themeColor: '#e3ac2b',
        msTileColor: '#182350',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#e3ac2b',
        workboxOptions: {
            skipWaiting: false
        },
    },
    transpileDependencies: true,
})
