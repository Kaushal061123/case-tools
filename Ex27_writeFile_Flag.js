// ex 26: Writing data to a file using writeFile().
var fs = require('fs');
var data = 'This is the month of March.';
fs.writeFile(__dirname + '/Test_name.txt', data,{
    flag: 'wx'
}, function(error){
    if(error){
        return console.error(error.message);
    }
});