
//vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://www.my-site.com"
            }
        }
    },
    configureWebpack: require('./webpack.config')
}