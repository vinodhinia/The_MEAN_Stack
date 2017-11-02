/**
 * Created by vino on 5/22/17.
 */
http = require('http');
fs =  require('fs')

var successRes = {
    data:{},
    errorMessage:null
};

let errorRes = {
    error:{
        message:"Something really bad happened",
        code:503
    },
    data :null
};

var listener = function (req,res) {
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"application/json"});
        // html = fs.readFileSync(__dirname+"/index.html","utf-8");
        // html = html.replace("{message}","I am doing Fine")
        successRes.data = "I hope everything is fine"
        res.end(JSON.stringify(successRes)+ "\n");
    }else if(req.url === '/getFiles'){
        fs.readdir(__dirname +"/myFiles","utf-8",function(err,data){
            if(err){
                res.writeHead(404,{"content-type":"application/json"});
                errorRes.error.errorMessage = err.message;
                errorRes.code = err.code;
                res.end(JSON.stringify(errorRes)+ "\n")
            }
            res.writeHead(200,{"content-type":"application/json"});
            successRes.data = data;
            res.end(JSON.stringify(successRes)+ "\n")
        })
    }

}

http.createServer(listener).listen(3090);