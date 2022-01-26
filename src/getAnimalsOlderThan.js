const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nomeEspecie = data.species.find((ani) => animal === ani.name);
  return nomeEspecie.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
