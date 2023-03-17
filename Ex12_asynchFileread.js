//ex 12 : asynch reading a file using a callbacxk fun
var fs = require('fs');
fs.readFile(__filename,'utf8',function(error,data){
    if(error)
    {
        return console.error(error);
    }
    console.log(data);
});