const { config } = require('../config')

function cacheResponse(res, seconds) {
  if (!config.isDev) {
    res.set('Cache-Control', `public, max-age=${seconds}`)
  }
}

module.exports = {
  cacheResponse
}