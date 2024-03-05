var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
const n = 3.14159
let area = (n * (raio**2)).toFixed(4)

console.log('A=' + area);