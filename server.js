var http = require('http');

    var requestListener = function (req, response) {
             response.end("Hello World!");
    }

 
 var server = http.createServer(requestListener);
 
 server.listen(process.env.PORT, process.env.IP); 