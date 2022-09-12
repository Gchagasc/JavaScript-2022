//               01234567
let umaString = "Um texto";

console.log(umaString.concat(' em', 'um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`)

//Busca
console.log(umaString.search(/[a-z]/g));
console.log(umaString.search(/x/));

//Substituição
console.log(umaString.replace('Um', 'Outra'));

//medição de string
console.log(umaString.length);

//cortar string
console.log(umaString.slice(-5))

//pode-se tambem subtrair o valor total da string para que o slice pegue outro valor
console.log(umaString.slice(-5), umaString.length - 1)

//formatação da string
console.log(umaString.toUpperCase());

