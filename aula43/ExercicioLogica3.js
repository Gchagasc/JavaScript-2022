/* 
Escreva uma função que recebe um número e retorne o seguinte:
Numero é divisível por 3 = Fizz
Numero é divisível por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o numero é realmente o numero
Use a função com numeros de 0 a 100
*/

function Div(x) {
    if (x % 3 === 0) {
        console.log('Fizz');
    }

    if (x % 5 === 0) {
        console.log('Buzz');
    }

    if (x % 3 === 0 && x % 5 === 0) {
        console.log('FizzBuzz');
    }

    if (x % 3 && 5 > 0) {
        console.log(x);
    }

    if (typeof x !== 'number') {
        console.log(x);
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, Div(i))
}