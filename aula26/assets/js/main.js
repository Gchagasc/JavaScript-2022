// Capturar evento de submit do formulario
// parei no 10:22
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento) {
    evento.preventDefault
    console.log('Evento prevenido')
    setResultado('Gordo adiposo!');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = 'Qualquer porra';
    resultado.appendChild(p);

}