// setTimeout(()=>{
//     console.log("test");
// }, 1000);

// console.log(global);

// Q1
// var x = 10;
// console.log(global.x);

// Q2
// console.log(__dirname);
// console.log(__filename);

// module system
// const {people, a} = require("./people");
// console.log(people, a);
// "module" is an object that is available globally in node runtime

// immediately invoked function expression 
// iife is used to construct the module system in nodejs where 
// exports = {},  module (global object), require (function), __filename, __dirname are passed 
// as parameters to an IIFE which wraps the entire required file's source code and returns the module object

const lodashLib = require("lodash");
const people = require("./people");
console.log(people);
console.log(lodashLib.last(people));
