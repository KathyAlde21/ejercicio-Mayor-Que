/* Calcular cuál es mayor o si tienen el mismo valor
y entregar información en pantalla al usuario */

var numeroUno = parseInt(prompt('Ingresa el primer número: '));
var numeroDos = parseInt(prompt('Ingresa el segundo número: '));

if (numeroUno == numeroDos) {
    alert('Los números son iguales');
}else if (numeroUno > numeroDos) {
    alert(numeroUno + ' es mayor que ' + numeroDos);
}else{
    alert(numeroDos + ' es mayor que ' + numeroUno);
}
