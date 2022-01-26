const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adult = entrants.filter((idade1) => idade1.age >= 18 && idade1.age < 50);
  const child = entrants.filter((age1) => age1.age < 18);
  const senior = entrants.filter((age2) => age2.age >= 50);
  return { adult: adult.length, child: child.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const countEntrantss = countEntrants(entrants);
  return (countEntrantss.adult * data.prices.adult)
  + (countEntrantss.child * data.prices.child)
  + (countEntrantss.senior * data.prices.senior);
}
// a ideia do return com todos os calculos foi ajuda de Kelson Batista;
module.exports = { calculateEntry, countEntrants };
