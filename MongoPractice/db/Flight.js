var mongoose = require('mongoose');
var flight = mongoose.model('flight',{
    ident: String,
    timestamp:String,
    longitude : String,
    latitude :String,
    updateType: String,
    heading :String,
    arrivalTime : String

});

module.exports = flight;