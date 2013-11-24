var http = require('http');

http.createServer(function(requ, resp){
    resp.writeHead(200);
    resp.write("Hello, it's me");
    resp.end();
}).listen(8123);

console.log('listening on port 8123...');

// [exec:] node http.js
// 
// then call telnet localhost 8123
// GET /index.htm HTTP/1.1
// <return>
// <return>
