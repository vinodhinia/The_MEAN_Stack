/**
 * Created by vino on 5/8/17.
 */
var fs = require('fs')

var result = fs.readdirSync('/Users/vino/SampleData/','utf8')

console.log("Synchronous")
console.log(result)


fs.readdir('/Users/vino/SampleData/',function(err,files){
    for(var i=0;i< files.length;i++){
        console.log(files[i])
    }
})
