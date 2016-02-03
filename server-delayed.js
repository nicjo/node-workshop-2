
var http = require('http');


    var requestListener = function (req, response) {
        setTimeout(slowResponse, 10000);

        function slowResponse(){
          response.end("Hello World!");
      }
             
    };

 
 var server = http.createServer(requestListener);
 
 server.listen(process.env.PORT, process.env.IP); 