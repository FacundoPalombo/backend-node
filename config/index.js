require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'production'
}

module.exports = { config }