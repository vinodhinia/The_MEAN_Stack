/**
 * Created by vino on 6/25/17.
 */
var isMomHappy = false;

var willgetAnewPhone = Promise(
    function(request,resolve){
        if(isMomHappy){
            var phone={
                brand:"Apple",
                cost:"3500£"
            }
            resolve(phone)
        }else{
            var error = new Error("Mom not happy");
            reject(error)
        }
    }
)