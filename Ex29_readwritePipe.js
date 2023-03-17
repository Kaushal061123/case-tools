//Ex 29: Piping a readable file stream into a
//writable file stream.
var fs = require('fs');
var readStream = fs.createReadStream('test_name.txt');
var writeStream = fs.createWriteStream('writetest.txt');
readStream.pipe(writeStream);