const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animais) => ids.includes(animais.id));
}
module.exports = getSpeciesByIds;
