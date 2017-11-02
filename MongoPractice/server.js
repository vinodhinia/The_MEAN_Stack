/**
 * Created by vino on 6/12/17.
 */
let express = require('express');
let mongoose = require('mongoose')
let bodyparser = require('body-parser')
let flight = require('./db/Flight');
let jsonparser = bodyparser.json();
let app = new express();
app.use(jsonparser);
app.use(express.static(__dirname+"/public"));
mongoose.connect('mongodb://localhost/flightsdb');
// app.get('/myGetApi',function (req,res,next) {
//     res.json({
//         message: "Hi there!!"
//     })
// });
app.get('/myGetApi',function (req,res,next) {
    flight.find(function(err,data){
        if(err){
            res.json(err).status("Status",500);
        }else{
            res.json(data);
        }
    }).limit(20)
});




app.listen(8089);