/**
 * Created by vino on 6/5/17.
 */
var express = require('express');
var myApp = express();
myApp.use('/static',express.static('public'))//looks for file under public folder
myApp.get('/', function handleRoot(req, res, next) { res.send('Hello World From Express!');
}); myApp.listen(8080);