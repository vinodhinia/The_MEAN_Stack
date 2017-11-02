/**
 * Created by vino on 6/5/17.
 */
let express = require('express');
let middlewares = require('./middlewares');
let myApp = express()


myApp.use(middlewares.firstMiddleware)
myApp.use(middlewares.secondMiddleware)
myApp.use(middlewares.thirdMiddleware)
myApp.use(middlewares.errorMiddleware)
myApp.use(express.static('public'));

myApp.get("/",function(req,res){

    res.end("I am spinned by express JS");
})

myApp.use(middlewares.errorMiddleware);
myApp.listen(3010);