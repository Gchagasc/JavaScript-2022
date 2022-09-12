//  índices       0        1       2     3   4     5
const alunos = ['Luiz', 'Maria', 'João', 1, true, null];



console.log(alunos[50]); //indices inexistentes são exibidos como undefined

delete alunos[1]; // remove o valor do indice, deixando-o vazio
console.log(alunos[1]);


//remoção de valores do array
const removido = alunos.pop(); //remove o último valor do array, enquanto >>neste caso<< armazena em uma variável
console.log(removido);
console.log(alunos);

//inserção de valores no array
alunos.push('Luiza') //adiciona no fim
alunos[alunos.length] = 'Josnel' //adiciona um novo índice e insere o valor
alunos.unshift('Fábio') //adiciona no começo


//exibição de valores distintos contidos no array
console.log(alunos[0]);
console.log(alunos[2]);