/**
 * Created by vino on 5/22/17.
 */


var myAppvar = angular.module("myApp",[]);
myAppvar.filter("removeDash",function () {
    return function (texttoremoveDash) {
        if(angular.isString(texttoremoveDash)){
            return texttoremoveDash.replace("-"," ")
        }
        return texttoremoveDash
    }
});
