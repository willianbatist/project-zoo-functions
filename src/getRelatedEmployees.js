const data = require('../data/zoo_data');
// some verifica se possivel pelo menos um item de ids.managers cumpre a condição. Para pergar o item em espesifico e verificar foi usado o find.
function isManager(id) {
  return data.employees.some((ids) => ids.managers.find((item) => item === id));
}
// 1- o if(isManager()) serve para da vadilação se manageId é gerente ou não para essa função getRelatedEmployees. 2- Se sim. Primeiro o const funcionariosDoGerente busca em data.employees com filter mais com a combinação do some, que mostrara um booleano de todos os itens que tenham como managers o managerId. throw é o mesmo que return é usado para erro.
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const funcionariosDoGerente = data.employees.filter((gerentes) => gerentes.managers
      .some((gerente) => gerente === managerId));
    return funcionariosDoGerente
      .map((funcionarios) => `${funcionarios.firstName} ${funcionarios.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// AJUDA DE ALEX SILVA-T17 & JONATAS LIMA-T17;
module.exports = { isManager, getRelatedEmployees };
