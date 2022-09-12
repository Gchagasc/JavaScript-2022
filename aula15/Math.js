let num1 = 7.3;

//Arredondar para baixo
let num2 = Math.floor(num1);

//Arredondar para cima
let num3 = Math.ceil(num1);

//Arredondar automaticamente (conforme regra matemática da aproximação)
let num4 = Math.round(num1);

//Exibir maior numero dentro de um conjunto
console.log(Math.max(1,2,3,4,5,500,647,-80,-666,-30,-467));

//Exibir menor valor dentro de um conjunto
console.log(Math.min(1,2,3,4,5,500,647,-80,-666,-30,-467));

//Gerar numero aleatório (entre 10 e 5)
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
