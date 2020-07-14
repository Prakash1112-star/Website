var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app).listen(9000);

app.use(express.static(path.join(__dirname)));
console.log("Server started. Enjoy now!!!!")