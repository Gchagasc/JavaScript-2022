/*
entre 0 - 11 - Bom dia
entre 12 - 17 - Boa tarde
entre 18 - 23 - Boa noite
*/

/*
if pode ser usado sozinho
sempre que utilizo a palavra else, preciso de um if antes
eu posso ter varios else ifs na checagem
só posso ter um else na checagem
*/
const hora = 13;

if(hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >=12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}
