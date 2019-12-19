const express = require('express')
const app = express();

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

const {
  logErrors,
  errorHandlers
} = require('./utils/middlewares/errorHandlers')

// body parser

app.use(express.json())

moviesApi(app)

app.use(logErrors)
app.use(errorHandlers)


app.listen(config.port, () => {
  console.log(`server running on http://localhost:${config.port}/`)
})