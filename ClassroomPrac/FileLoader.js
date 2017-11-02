let fs=require('fs');

let successRes={
    data:{},
    errorMessage:null
};
let errorRes={
    data:null,
    errorMessage:{
        message:"Something really bad has happened",
        code:503
    }
}
let fileLoader=function(req,res){
    fs.readdir(__dirname + "/myFiles", "utf-8", function (err, data) {
        if (err) {
            res.writeHead(404, {"Content-Type": "application/json"});
            errorRes.eror.errorMessage = err.message;
            errorRes.error.code = err.code;
            res.end(JSON.stringify(errorRes) + "\n")
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        successRes.data = data;
        res.end(JSON.stringify(successRes) + "\n");
    })
};

module.exports=fileLoader;