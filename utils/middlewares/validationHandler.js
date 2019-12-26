const boom = require('@hapi/boom')
const debug = require('debug')('app:validate')

function validate(data, schema) {
  const { error } = joi.validate(data, schema)
  return error
}

function validationHandler(schema, check = 'body') {
  return function(err, req, res, next) {
    if (err) return debug(err)
    const error = validate(req[check], schema)
    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = { validationHandler }
