//Excercise 4: Ctreate a web server to write 
//plain text on the browser
var http = require('http')
http.createServer(function (req,res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Today is beautiful\n");
    res.write("\nWelcome to Fr. Agnels");
    res.end("\nHello World\n");
}).listen(8080, '127.0.0.1');
console.log("Server running at http://127.0.0.1:8080/");