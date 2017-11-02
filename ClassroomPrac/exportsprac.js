/**
 * Created by vino on 5/22/17.
 */
var obj = {};
var obj2 = obj;
obj2.a = function(){
    return "Reference"
}

result = obj.a()
console.log(result)


obj2 = function a(){
    return "Reference"
}

result1 = obj.a()