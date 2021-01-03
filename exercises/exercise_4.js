/**
 * Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string.
 * Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

function monthName(number) {
  switch (number) {
    case 1:
      console.log('January');
      break;
    case 2:
      console.log('February');
      break;
    case 3:
      console.log('March');
      break;
    case 4:
      console.log('April');
      break;
    case 5:
      console.log('May');
      break;
    case 6:
      console.log('June');
      break;
    case 7:
      console.log('July');
      break;
    case 8:
      console.log('August');
      break;
    case 9:
      console.log('September');
      break;
    case 10:
      console.log('October');
      break;
    case 11:
      console.log('November');
      break;
    case 12:
      console.log('December');
      break;

    default:
      if ((number = -1)) {
        console.log('You chose to leave!!');
      }
  }
}

monthName(1);

// TENTATIVA DIFERENTE
// const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];
// let nameMouth = [];
// let newIndice = 0;

// function monthName2(number, indice) {
//   meses[number] = meses[indice];
//   nameMouth[newIndice] = meses[indice];
//   newIndice++;
// }

// meses.forEach(monthName2);
// console.log(nameMouth);

//RESOLUÇÃO 2
// function receberNomeDoMes(numero) {
//   const mapeamento = [
//     'janeiro',
//     'fevereiro',
//     'março',
//     'abril',
//     'maio',
//     'junho',
//     'julho',
//     'agosto',
//     'setembro',
//     'outubro',
//     'novembro',
//     'dezembro',
//   ];
//   return mapeamento[--numero];
// }

// console.log(receberNomeDoMes(2));
