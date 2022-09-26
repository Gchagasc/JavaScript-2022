const pessoa = {
    nome: 'Gabriel' ,
    sobrenome: 'Chagas'
};
/*
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}



for(let i in nome) {
    console.log(nome[i]);
}



for(let valor of nome) {
    console.log(valor);
}
*/

nome.forEach(function(valor, i, array) {
    console.log(valor, i, array);
});

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)