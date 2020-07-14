var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app).listen(6000);

app.use(express.static(path.join(__dirname, './index.html')));
console.log("Server started. Enjoy now with your slots!!!!")