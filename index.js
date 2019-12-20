const express = require('express')
const app = express()

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler')

const {
  logErrors,
  errorHandlers,
  wrapErrors
} = require('./utils/middlewares/errorHandlers')

// body parser

app.use(express.json())

//Routes
moviesApi(app)

//catch 404
app.use(notFoundHandler)

//error middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandlers)

app.listen(config.port, () => {
  console.log(`server running on http://localhost:${config.port}/`)
})
