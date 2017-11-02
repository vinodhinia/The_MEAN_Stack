/**
 * Created by vino on 5/26/17.
 */
import Async from 'react-promise'


let prom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('a value')
    }, 100)
})

console.log(prom)