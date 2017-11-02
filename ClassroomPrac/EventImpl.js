/**
 * Created by vino on 5/15/17.
 */
/**
 * Created by vino on 5/15/17.
 */
//var EventEmitter = require('./Nodeevent.js');
var EventEmitter = require('events').EventEmitter;

var eventTypes = require('./config.js');
var emiter = new EventEmitter();

emiter.on(eventTypes.SHOOT,function(data){
    console.log("How are you doing >>> "+data)

});

emiter.on(eventTypes.SHOOT,function(data){
    console.log("Hi from Node Emitter >>"+data)

});

emiter.emit(eventTypes.SHOOT,"JOHN")