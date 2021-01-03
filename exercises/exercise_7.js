/**
 * Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro)
 * está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
 *  Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva,
 *  não considerando se numero é igual a minimo ou a maximo.
 */

function beBetween(min, max, number, inclusive = false) {
  if (inclusive) return number >= min && number <= max;

  return number > min && number < max;
}

console.log(beBetween(10, 100, 50));
console.log(beBetween(16, 100, 160));
console.log(beBetween(3, 150, 3));
console.log(beBetween(3, 150, 3, true));
