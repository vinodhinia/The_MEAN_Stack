/**
 * Created by vino on 5/15/17.
 */
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {hightWaterMark: 16 * 1024});
var writable = fs.createWriteStream(__dirname+ '/greatCopy.txt');

readable.on('data',function(chuck){
    writable.write(chuck)
    console.log(chuck)
})

readable.pipe().writable();