let teclado = require('prompt-sync')();

console.log('--------------------------');
console.log('- Conversor de Temperatura -');
console.log('--------------------------');

let celsius: number = parseInt(teclado('Digite a temperatura em Celsius: '));
let fahrenheit: number = (celsius * 9/5) + 32;

console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`)