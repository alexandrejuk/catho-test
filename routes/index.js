/* eslint-disable new-cap */
const route = require('express').Router()
const jobsController = require('../controllers')

route.get('/jobs', jobsController.getJobs)

module.exports = route