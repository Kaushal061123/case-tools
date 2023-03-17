//ex 15: Solving Callback hell issue in below code by having named callback
//anonymous callback function and writing the callback definition separately
var fs =require('fs');
var fileName = 'caltest.js';
function readCallback(error,data){
    if (error){
        return console.error(error);
    }
    console.log(data);
}
function statCallback(error,stats){
    if (error){
        return console.error(error);
    }
    else if(!stats.isFile()){
        return console.error('Not a file');
    }
    fs.readFile(fileName,'utf8',readCallback);
};
function existsCallback(exists){
    if (!exists){
        return console.error('File does not exist');
    }
    fs.stat(fileName,statCallback);
}
fs.exists(fileName,existsCallback);