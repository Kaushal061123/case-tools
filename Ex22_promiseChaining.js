//Ex 22: Promise chaining by using then() to chain promises.
var fs = require('fs');
var promise = new Promise(function(resolve,reject){
    fs.readFile('Ex20_EE_process.js','utf8',function(error,data){
        if(error){
            return reject(error);
        }
        resolve(data);
    });
});
promise.then(function(result){
    console.log(result);
    return 'I am Ashley';
}).then(function(result){
    console.log(result);
});