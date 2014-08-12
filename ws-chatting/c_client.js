/**
 * Created by jo on 8/12/14.
 */
var WebSocket = require("ws");
var dig = require("./supply/digits");
var ws = new WebSocket("ws://localhost:8001");

var ID = dig.genID("console");

ws.on("open", function () {
    console.log("SEND: " +JSON.stringify({id: "INIT", msg: ID}));
    ws.send(JSON.stringify({id: "INIT", msg: ID}));

    var MESSAGE = "Hello, guy!";
    var msgO = { id: ID, msg: MESSAGE};
    console.log("SEND: "+ JSON.stringify(msgO));
    ws.send(JSON.stringify(msgO));
});

ws.on("message", function (data, flags) {
    console.log("Server says: " + data);

    if (data.substr(0,4) != "INIT") {
        ws.close();
    } // close after first message
});