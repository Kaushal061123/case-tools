/*Ex 21: Creating a promise,using promise with 
asynchronous code and finally using promise's then() method.
instead of printing message to the console,
we either fulfill or reject the promise
based on the result of readFile():
then() takes
two arguments, a success callback fun and a 
failure callback fun. Success callback is invoked
if the promise is fulfilled, while the 
failure callback is invoked if the promise is rejected */
var fs = require('fs');
var promise = new Promise(function (resolve,reject){
    fs.readFile('Ex20_EE_process.js','utf8',function(error,data){
        if(error){
            return reject(error);
        }
        resolve(data);
    });
});
promise.then(function(result){
    console.log(result);
},function(error){
    console.error(error.message);
});
