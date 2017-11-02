/**
 * Created by vino on 5/15/17.
 */
function EventEmitter(){
    this.events = {}

}
EventEmitter.prototype.on = function(eventType,listener){
    this.events[eventType] = this.events[eventType] || [];
    this.events[eventType].push(listener);
};

EventEmitter.prototype.emit = function(eventType,data){
    if(this.events[eventType]){
        this.events[eventType].forEach(function (listener){
            listener(data);
        })
    }
};


module.exports = EventEmitter;