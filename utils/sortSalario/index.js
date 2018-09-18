/* eslint-disable no-confusing-arrow */
const sortSalarioAsc =
  (jobs) => jobs.sort((jobA, JobB) => jobA.salario < JobB.salario ? -1 : 1)

const sortSalarioDesc =
  (jobs) => jobs.sort((jobA, JobB) => jobA.salario < JobB.salario ? 1 : -1)

module.exports = {
  sortSalarioAsc,
  sortSalarioDesc
}