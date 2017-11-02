/**
 * Created by vino on 5/22/17.
 */
let fs= require('fs');
let fileLoader = function(mycallBack){
    fs.readdir(__dirname + "/myFiles","utf-8",function (err,data) {
        var results = [];
        if(err){
            return mycallBack(err);
        }
        // for(let i=0;i<data.lenght;i++){
        //     if(fs.stat('myFiles/'+data[i],function(err,stats){
        //         if(stats.isDirectory()){
        //             results.push(data[i])
        //         }
        //         })){
        //
        //     }
        // }
        (function iterator(index){
            if(index == data.lenght){
                mycallBack(results);
            }
            fs.stat('/myFiles/'+data[i],function(err,stats){
                if(stats.isDirectory()){
                    results.push(data[i])
                }

            iterator(index++);
        })(0)
        mycallBack(null,results);
    })
}