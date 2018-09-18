const filterJobs =
  (jobs) => (query) => jobs.filter((job) => job.title.match(query) ||
  job.description.match(query))

module.exports = filterJobs