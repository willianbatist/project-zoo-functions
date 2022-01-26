const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionarios = data.employees.find((funcionario) => funcionario.id === id);
  const animal = funcionarios.responsibleFor;
  const especies = data.species.find((especieAnimal) => especieAnimal.id === animal[0]);
  const residentes = especies.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = residentes[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
