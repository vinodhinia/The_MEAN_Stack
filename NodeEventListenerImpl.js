/**
 * Created by vino on 5/15/17.
 */
var EventEmitter = require('Nodeevent.js');
var emiter = new EventEmitter();

emiter.on('shoot',function(){
    console.log("How are you doing")

});

emiter.on('shoot',function(){
    console.log("Hi from Node Emitter")

});

emiter.emit('shoot')