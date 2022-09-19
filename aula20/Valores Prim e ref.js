/* 
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function - passados por referência
*//*
let a = [1, 2, 3];
let b = [...a];
c = b;
console.log(a, b);

a.push(4);
console.log (a);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);