/**
 * Created by vino on 5/15/17.
 */
var fs = require('fs');
var gzip=require('zlib')

var readable = fs.createReadStream(__dirname + '/greet.txt', {hightWaterMark: 16 * 1024});
var writable = fs.createWriteStream(__dirname+ '/greatCopy.txt');
readable.pipe(writable);