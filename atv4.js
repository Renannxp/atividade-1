var teclado = require('prompt-sync')();
console.log('--------------------------');
console.log('- Conversor de Temperatura -');
console.log('--------------------------');
var celsius = parseInt(teclado('Digite a temperatura em Celsius: '));
var fahrenheit = (celsius * 9 / 5) + 32;
console.log("A temperatura em Fahrenheit \u00E9: ".concat(fahrenheit));
