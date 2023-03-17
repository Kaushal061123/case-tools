//Exercise 3: Node.js program to demonstrate the 
//fs.readfile() method.
var fs = require('fs');
fs.readFile('index.html','utf8',function(err,data) // or fs.readFile('index.html','utf8',(err,data)=> (works the same way)
{
    console.log(data);
});
console.log("readFile called");