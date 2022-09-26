// For in -> lê os índices ou chaves do objeto
//                0       1      2
/*
const frutas = ['pera', 'maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(frutas[i]);
}
*/

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Chagas',
    idade: 30
};




for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}