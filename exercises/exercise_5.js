/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

function biggOrEqual(x, y) {
  if (typeof x != typeof y) return false;

  return x >= y;
}

console.log(biggOrEqual(0, 0));
console.log(biggOrEqual(0, '0'));
console.log(biggOrEqual(5, 1));
