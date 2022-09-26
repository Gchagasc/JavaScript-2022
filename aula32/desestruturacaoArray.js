/*
//   índices     0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const[primeiroNumero, segundoNumero, ...resto] = numeros; // cada valor informado neste array aponta para o mesmo valor na mesma ordem do array de cima, 
//pode-se pular indices com valores vazios sem aspas
console.log(primeiroNumero, segundoNumero);
console.log (resto);
*/

//                     0             1             2                 
//                 0   1   2     0   1   2     0   1   2
const numeros = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);