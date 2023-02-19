// there can be 3 types of modules such as custom written modules, npm package modules 
// and core nodejs modules
// core/builtin modules to access system resources where nodejs runtime is running 
// all modules provide us with some methods and properties



// path module
// const path = require("path");
// const myPath = 'C:/Users/No/Desktop/projects/nodejs-practice/index.js';
// const baseName = path.basename(myPath);
// const directoryName = path.dirname(myPath);
// const extName = path.extname(myPath);
// const parseRes = path.parse(myPath);
// console.log(baseName, directoryName, extName, parseRes);



// os module
// const os = require("os");
// osPlatform = os.platform();
// osHomedir = os.homedir();
// osFreemem = os.freemem();
// cpuCoreCount = os.cpus();
// console.log(osPlatform, osHomedir, osFreemem, cpuCoreCount);



// file system module 
// const fs = require("fs");

// // write something to file
// fs.writeFileSync("myFile.txt", "Hello world!");
// fs.writeFileSync("myFile.txt", "let replace previous content");

// // append content to file
// fs.appendFileSync("myFile.txt", "\nNew line of text appended\n");

// // read file 
// // stream and buffer is a seperate data type that is in binary format
// const data = fs.readFileSync("myFile.txt"); // synchronous/blocking program execution until file contents
// // are read from the file system
// console.log(data.toString());

// // asynchronous way of reading file contents 
// fs.readFile("myFile.txt", (err, data)=>{
//     if(err)
//         throw new Error(`Could not read from File ${err}`);
//     console.log(data.toString());
// });
// // asynchronous execution is always preferred



// events module 
// nodejs is a non-blocking event driven runtime
const EventEmitter = require("events"); // returns EventEmitter class
const emitter = new EventEmitter();

// register an event listener for "bellRing" event
// emitter.on("bellRing", function(){
//     console.log("Event er barota baijja geche !");
// });

// emitting event
// emitter.emit("bellRing");
// listener must be registered prior to emitting event

// event listener callback with parameters
emitter.on("bellRing", ({time, task})=>{
    console.log(`ghonta bajche! ${time}, ${task} lagbe`);
});

emitter.emit("bellRing", {
    time: "12 O'clock", 
    task: "Ghurte jaowa"
});

// event listener and event emitter should be added to the same EvenEmitter object 
// otherwise it will not work
