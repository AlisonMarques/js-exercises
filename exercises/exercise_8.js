/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.
 * Porém, não utilize o operador de mutiplicação.
 */

function multiply(x, y) {
  if (x < 0 || y < 0) return 0;

  const smallNumber = Math.max(x, y);
  const bigNumber = Math.min(x, y);

  function multiplicarRevursivamente(number, multiplicador) {
    return multiplicador === 1
      ? number
      : number + multiplicarRevursivamente(number, multiplicador - 1);
  }

  return multiplicarRevursivamente(bigNumber, smallNumber);
}

console.log(multiply(-1, -1));

// function multiply(x, y) {
//   if (x && y >= 0) {
//     let total = x * y;
//     return total;
//   } else {
//     return 'Número negativo é inválido';
//   }
// }

// console.log(multiply(2, -1));
