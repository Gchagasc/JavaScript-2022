/*
try {
console.log(naoExiste);
} catch(erro) {
    console.log('naoExiste não existe.');
}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser numeros.');
    }

    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('1', 2));

} catch(error) {
    console.log('Algo mais amigável');
}

// try catch puxa o Reference error da função anterior