// stream: is a continuous flow of some objects e.g., a waterfall is a stream of water
// buffer: collection of something in an encapsulating container which we can work with 
// e.g., a bucket of water 


// we only get complete buffer in our application, packets of bytes makes a buffer and we 
// operate on that buffer unless a buffer is complete

// read stream: 
// const fs = require("fs");
// const bigDataReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');

// bigDataReadStream.on("data", (chunk)=>{
//     console.log(chunk);
// });

// console.log("hello");



// http server request body is streamed by default
const http = require("http");
const server = http.createServer((req, res)=>{
    const requestBody = [];

    if(req.url == "/"){
        res.write(`
            <html>
                <head>
                    <title> Request body is streamed to nodejs server </title>
                </head>
                <body>
                    <form method="POST" action="/process">
                        <input type="text" name="message"/>
                    </form>
                </body>
            </html>
        `);

    }else if(req.url == "/process"){
        res.write("processing !");

        req.on("data", (chunk)=>{
            requestBody.push(chunk);
        });

        req.on("end", ()=>{
            console.log("stream finished");
            wholeReq = Buffer.concat(requestBody);
            console.log(wholeReq.toString());
        });

    }else{
        res.write("path not found !");
    }
    res.end();
});

server.listen(3000);
console.log("listening on port 3000");
