var teclado = require('prompt-sync')();
console.log('--------------------------');
console.log('- Conversor de Temperatura -');
console.log('--------------------------');
var fahrenheit = parseFloat(teclado('Digite a temperatura em Fahrenheit: '));
var celsius = (fahrenheit - 32) * 5 / 9;
console.log("A temperatura em Celsius \u00E9: ".concat(celsius));
