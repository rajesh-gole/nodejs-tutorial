const { color, log, red, green, cyan, cyanBright } = require('console-log-colors');

console.log(green('This is a green string!'));
console.log(color.red('This is a red string!'));
console.log(color('This is a cyan string!', 'cyan'));
console.log(color('This is a cyanBright string!', 'cyanBright'));