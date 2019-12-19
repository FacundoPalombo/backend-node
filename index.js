const express = require('express')
const app = express();

const { config } = require('./config/index')
const moviesApi = require('./routes/movies')
app.use(express.json())
moviesApi(app)

app.listen(config.port, () => {
  console.log(`server running on http://localhost:${config.port}/`)
})