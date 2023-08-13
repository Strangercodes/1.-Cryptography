// // console.log("hII Buddy");
// // console.log(window);

// // const { abort } = require("process");

// // const a = 4020;

// // const b = {
// //     average:(a,b) => {
// //         console.log((a+b)/2);
// //     },
// //     percent:(a,b) => {
// //         console.log(a/b*100);
// //     }
// // };

// // module.exports = a;

// // module.exports = b;


// // const { isUtf8 } = require("buffer");
// // building modules
// // const fs = require("fs");

// // console.log(fs);


// // const a = fs.readFileSync("./sample.txt", "utf-8");
// // console.log(a);
// // fs.readFile("./sample.txt","utf-8",(err,data)=>{
// //     if(err){
// //         throw err;
// //     }
// //     // 1000 sec
// //     console.log(data);
// // }) ;

// // 200 sec

// // const a = "This code made by pp";
// // const b = "This code made by Me";

// // fs.writeFile("./new.txt", a, ()=> {
// //     console.log("Written");
// // });
// // fs.writeFileSync("./new3.txt", b,)
// // console.log("I'm First"); 

// // const path = require("path");
// // const c = path.extname("./node/index.js");
// // console.log(c);

// const os = require("os");
// console.log(os.hostname());

// const http = require("http");
// const bcrypt = require("bcrypt");

// const password = "pass@123"

// const getHashPassword = async () => {
//     let data =  await bcrypt.hash(password, 10);
//     console.log(data)
// }

// for(let i = 0 ; i<10 ; i++ ){
//     getHashPassword();
// }



const http = require("http");
const fs = require("fs")
const PORT = 2000;

const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

console.log(__dirname);
const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === "/"){
        return res.end(home);
    }
    if (req.url === "/about"){
        return res.end("<h1>CONTACT PAGE <h1>");
    }
    if(req.url === "/services") {
        return res.end("<h1>SERVICE PAGE</h1>");
    }
    else{
        return res.end("<h1>404 page not found<h1>")
    }
});

server.listen(PORT, hostname, () => {
    console.log(`server is working properly on http://${hostname}:${PORT}`);
});
