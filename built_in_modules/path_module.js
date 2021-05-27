const path = require('path')

console.log(path.sep);

const filepath = path.join('content','sub','text.txt')
console.log(filepath);

const basename = path.basename(filepath)
console.log(basename);