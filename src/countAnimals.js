const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objetosSpecies = {};
  if (animal === undefined) {
    data.species.forEach((especie) => {
      objetosSpecies[especie.name] = especie.residents.length;
    });
    return objetosSpecies;
  }
  const { specie, sex } = animal;
  const objetoEspecie = data.species.find((especie) => especie.name === specie);
  if (sex === undefined) {
    return objetoEspecie.residents.length;
  }
  return objetoEspecie.residents.filter((animalSex) => animalSex.sex === sex).length;
}

module.exports = countAnimals;
