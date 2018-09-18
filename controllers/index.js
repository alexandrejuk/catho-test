const jobs = require('../db')
const { filterJobs, filterJobsCity } = require('../utils/filters')
const { sortSalarioAsc, sortSalarioDesc } = require('../utils/sortSalario')

const sortResponse = (sort, jobs) => 
  parseInt(sort) === 1 ? sortSalarioAsc(jobs) : sortSalarioDesc(jobs)

const filterFunction = req => jobs => {
  let { sort, function: functionJob, skip, limit } = req
  const jobsFound = filterJobs(jobs)(functionJob)
  let jobsResponse = []

  for (skip; skip < limit; skip++) {
    if (jobsFound[skip]) {
      jobsResponse = [...jobsResponse, jobsFound[skip]]
    }
  }
  
  if (sort) {
    return { count: jobsFound.length, jobs: sortResponse(sort, jobsResponse) }
  }
  return { count: jobsFound.length, jobs: jobsResponse }
}

const filterJobsByCity = req => jobs => {
  let { sort, city, skip, limit } = req
  const jobsFound = filterJobsCity(jobs)(city)
  let jobsResponse = []

  for (skip; skip < limit; skip++) {
    if (jobsFound[skip]) {
      jobsResponse = [...jobsResponse, jobsFound[skip]]
    }
  }
  
  if (sort) {
    return { count: jobsFound.length, jobs: sortResponse(sort, jobsResponse) }
  }
  return { count: jobsFound.length, jobs: jobsResponse }
}

const getJobs = (req, res, next) => {
  let { skip = 0, limit = 10, function: functionJob, city, sort } = req.query
  let count = jobs.docs.length
  let jobsResponse = []
  try {
    if (functionJob) {
      return res.json(filterFunction(req.query)(jobs.docs))
    }

    if (city) {
      return res.json(filterJobsByCity(req.query)(jobs.docs))
    }
    
    for (skip; skip < limit; skip++) {
      jobsResponse = [...jobsResponse, jobs.docs[skip]]
    }

    if (sort) {
      return res.json({ count, jobs: sortResponse(sort, jobsResponse) })
    }

    return res.json({ count, jobs: jobsResponse })
  }
  catch(error) {
    next(error)
  }
}

module.exports = {
  getJobs
}

