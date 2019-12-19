function validate() {
  return false;
}

function validationHandler(schema, check = "body"){
  return function(err,req,res,next) {
    if(err) return console.log(err)
    const error = validate(req[check], schema)
    error ? next(new Error(error)) : next()

  }
}

module.exports = validationHandler