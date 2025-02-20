let teclado = require('prompt-sync')();

console.log('--------------------------');
console.log('- Conversor de Temperatura -');
console.log('--------------------------');

let fahrenheit: number = parseFloat(teclado('Digite a temperatura em Fahrenheit: '));
let celsius: number = (fahrenheit - 32) * 5/9;

console.log(`A temperatura em Celsius é: ${celsius}`)
