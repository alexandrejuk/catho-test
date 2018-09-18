const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const jobsRoute = require('./routes')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', jobsRoute)

app.use(logger('dev'))
app.use(cookieParser())

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  /* eslint-disable no-param-reassign */
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : err

  /* eslint-disable no-console */
  console.error(err.stack || err)
  res.status(err.status || 500)
  res.json(res.locals.error)
})

module.exports = app