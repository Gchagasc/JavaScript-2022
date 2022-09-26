const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Chagas',
    idade: 25,
    endereco: {
        rua: 'Dona Josefina',
        numero: 211
    }
};

// Atribuição via desestruturação

/*
const { nome, sobrenome, idade } = pessoa; 
console.log(nome, sobrenome);
*/

const { endereco: { rua, numero },
        endereco 
    } = pessoa; 
console.log(rua, numero);
console.log(endereco);