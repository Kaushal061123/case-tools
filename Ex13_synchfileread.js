//Ex 13: Synchronously reading a file. Try catch block is used to handle errors in
//synchronous file reading.
var fs = require('fs');
try{
    var data = fs.readFileSync('caltest.js','utf8');
    console.log(data);
} catch(error){
    console.error(error);
}