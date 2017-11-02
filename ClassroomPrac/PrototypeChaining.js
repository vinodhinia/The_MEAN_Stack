/**
 * Created by vino on 5/15/17.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Greeter(){
    this.greeting = "Hello There  !!";
}

// This line makes sure that all the instances of the Greeter Constructor would have an access to all the methods defined on the prototype of the event listener

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data){
    this.emit('greeting',data);
}


Greeter.prototype.on('greeting',function(data){
    console.log("Hi there >> "+data)
});

var greeter = new Greeter()



greeter.greet('John');