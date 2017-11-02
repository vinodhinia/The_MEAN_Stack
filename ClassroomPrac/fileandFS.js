/**
 * Created by vino on 5/15/17.
 */
var fs = require('fs');

var greet = fs.readFileSync('./greet.txt','utf-8');
console.log(greet);

var greet1 = fs.readFile('./greet.txt','utf-8',function(err,contents){
    if(err){
        console.log(err)
    }
    console.log(contents);
});

console.log("Done")