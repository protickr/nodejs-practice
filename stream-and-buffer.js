// stream: is a continuous flow of some objects e.g., a waterfall is a stream of water
// buffer: collection of something in an encapsulating container which we can work with 
// e.g., a bucket of water 


// we only get complete buffer in our application, packets of bytes makes a buffer and we 
// operate on that buffer unless a buffer is complete

// read stream: 
const fs = require("fs");
const bigDataReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');

bigDataReadStream.on("data", (chunk)=>{
    console.log(chunk);
});

console.log("hello");