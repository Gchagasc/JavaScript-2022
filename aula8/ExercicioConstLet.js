/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8m de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;



console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura,'m de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento)

//Jeito mais interessante

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);