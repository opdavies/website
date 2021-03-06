let Encore = require('@symfony/webpack-encore')
let purgecssConfig = require('./purgecss.config')
let PurgecssPlugin = require('purgecss-webpack-plugin')

Encore
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enablePostCssLoader()
    .configureLoaderRule('css', loaderRule => {
        loaderRule.test = /\.(css|p(ost)?css)$/
    })

if (Encore.isProduction()) {
    Encore
        .enableVersioning()
        .addPlugin(new PurgecssPlugin(purgecssConfig))
} else {
    Encore.enableSourceMaps()
}

module.exports = Encore.getWebpackConfig()
