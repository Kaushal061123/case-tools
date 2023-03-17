//Excercise 5: creating a webserver with file I/O using Node.js
//to return a simple html web server using a built-in 'http' module
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res)
{
    fs.readFile('index.html', function(err, data)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log('Server running');