// there can be 3 types of modules such as custom written modules, npm package modules 
// and core nodejs modules
// core/builtin modules to access system resources where nodejs runtime is running 
// all modules provide us with some methods and properties

// path module
const path = require("path");
const myPath = 'C:/Users/No/Desktop/projects/nodejs-practice/index.js';
const baseName = path.basename(myPath);
const directoryName = path.dirname(myPath);
const extName = path.extname(myPath);
const parseRes = path.parse(myPath);
console.log(baseName, directoryName, extName, parseRes);
