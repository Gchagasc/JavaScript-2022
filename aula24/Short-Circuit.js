/*
&& -> false && true -> false "o valor mesmo", quando false, será sempre retornado o primeiro valor falso
|| -> false || true -> true "o valor mesmo", será sempre retornado o primeiro valor true, caso false será retornado o ultimo valor

FALSY (valores que, por padrao sao considerados false)
false
0
'' "" ``
null undefined
NaN
*/


function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
