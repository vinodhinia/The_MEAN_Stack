/**
 * Created by vino on 20/5/17.
 */
var http = require('http');
var url = require('url');

var server;

server = http.createServer(function (req, res) {

    var path = url.parse(req.url).pathname;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            return send404(res);
        }
        res.writeHead(200, {'Content-Type':path == 'json.js' ? 'text/javascript' : 'text/html'});
        res.write(data, 'utf8');
        res.end();
    });
}),
    server.listen(8001);

var express = require('express');
var handlerModule = require('./handlers/handlerModule');
var path = require("path"),
    async = require('async');
fs = require('fs');

var app = express();
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.use(express.static(__dirname + '/public'));
app.get('/flights/carriers', handlerModule.flightCarrierListHandler);
app.get('/flights/carriers/:carrierName', handlerModule.flightListHandler);


app.listen(3003);
console.log('Server Up and Running');






