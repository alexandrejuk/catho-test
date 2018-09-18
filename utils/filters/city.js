const queryRegExp = require('../queryRegExp')

const filterJobsCity = (jobs) => (query) => jobs.filter((job) => {
  const foundCity =
    job.cidade.filter((location) => location.match(queryRegExp(query)))
  if (foundCity && foundCity.length > 0) {
    return job
  }

return null
})

module.exports = filterJobsCity