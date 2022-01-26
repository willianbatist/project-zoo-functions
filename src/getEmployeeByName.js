const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
