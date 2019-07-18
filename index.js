if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/miniapp-utils.js')
} else {
  module.exports = require('./dist/miniapp-utils.common.js')
}
