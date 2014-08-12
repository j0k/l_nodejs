var http = require("http");
var connect = require("connect");
var serveStatic = require('serve-static');

var app = connect();
var WebSocketServer = require("ws").Server;
var server;
var wsServer;


app.use(serveStatic('public')); //for future

server = http.createServer(app);
wsServer = new WebSocketServer({
    server: server
});

global_counter = 0;
all_active_connections = {};


wsServer.on("connection", function (ws) {
    ws.on("message", function (message, flags) {
        try {
            var msgO = JSON.parse(message);

            if (msgO.id == "INIT") {
                var id = global_counter++;
                all_active_connections[id] = ws;
                ws.id = id;
                console.log("new ID:" + id);
            }

            var msg = msgO.id + ": " + msgO.msg;
            // ws.send(msg, flags); -- send for only current client
            for (conn in all_active_connections)
                all_active_connections[conn].send(msg, flags);

        } catch (e) {
        }
        console.log(message);
    });

    ws.on('close', function () {
        delete all_active_connections[ws.id];
        console.log("ws.on.close");
    });


});

var port = 8001;
server.listen(8001);
console.log("Listen:" + port );