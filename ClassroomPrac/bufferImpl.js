/**
 * Created by vino on 5/15/17.
 */
var buff = new Buffer('Hello','utf-8');
console.log(buff);
console.log(buff.toString());

buff.write('wo');

console.log(buff);
console.log(buff.toString());