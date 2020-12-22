const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'weixin2uniapp': utils.resolve('weixin2uniapp/index.js')
        }
    },
}