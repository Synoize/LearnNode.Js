const path = require('path') //path module

// -------------------------------------
//              path module
// -------------------------------------

console.log(__dirname); // present working dir
console.log(__filename); // present working filename 

const filePath = path.join('folder', 'store', 'new', 'data.txt')

console.log(filePath);

console.log('parseData: ', path.parse(filePath));
console.log('resolvePath: ', path.resolve(filePath));
console.log('basename: ', path.basename(filePath));
console.log('extname: ', path.extname(filePath));
console.log('dirname: ', path.dirname(filePath));
console.log('separator: ', path.sep);
