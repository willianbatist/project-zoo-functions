const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

const horarios = Object.keys(data.hours);
const diasFuncionamento = Object.entries(data.hours);

const animaisDoDia = (days) => {
  const animal = data.species.filter((especie) => especie.availability.includes(days));
  return animal.map((x) => x.name);
};

const objetoDias = diasFuncionamento.reduce((acc, item) => {
  const [days, hours] = item;
  let officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
  let exhibition = animaisDoDia(days);
  if (days === 'Monday') {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  }
  acc[days] = {
    officeHour,
    exhibition,
  };
  return acc;
}, {});

const diaSemana = (dia) => {
  const test = {};
  test[dia] = objetoDias[dia];
  return test;
};

const animaisDias = (animal) => {
  const especieEncontrada = data.species.find((especie) => especie.name === animal);
  return especieEncontrada.availability;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return objetoDias;
  const buscandoNomesAnimais = species.find((nome) => nome.name === scheduleTarget);
  const verificandoDia = horarios.find((nome) => nome === scheduleTarget);
  const paransUndefined = buscandoNomesAnimais === undefined && verificandoDia === undefined;
  if (paransUndefined) return objetoDias;
  if (buscandoNomesAnimais) return animaisDias(scheduleTarget);
  return diaSemana(verificandoDia);
}

module.exports = getSchedule;
