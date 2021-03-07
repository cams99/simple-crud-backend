const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config')
const usersApi = require('./routes/users')

const {
  logErrors,
  wrapError,
  errorHandler,
} = require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler')

// body parser
app.use(express.json())

// cors
app.use(cors())

usersApi(app)

// Catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapError)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
})
