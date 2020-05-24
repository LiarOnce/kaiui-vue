const lessToJs = require('less-vars-to-js')

module.exports = function(content) {
    return `module.exports = ${JSON.stringify(lessToJs(content, {resolveVariables: true, stripPrefix: true}))}`
}