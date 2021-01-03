/**
 * Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
 * Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
 * desconsidere também dias decorridos desde o último aniversário.
 */

function convertAgeForDays(age) {
  let ageInDays = age * 365;
  return `Your age in days it's: ${ageInDays}`;
}

console.log(convertAgeForDays(21));
