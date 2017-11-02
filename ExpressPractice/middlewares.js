/**
 * Created by vino on 6/5/17.
 */
/**
 * Created by vino on 6/5/17.
 */


let firstMiddleware = (req,res,next)=>{
    console.log(new Date(),req.url,req.method)
    req.middlewareExecuted = req.middlewareExecuted ? req.middlewareExecuted : {};
    req.middlewareExecuted.firstMiddleware = true;
}

let secondMiddleware = (req,res,next)=>{
    console.log(new Date()+secondMiddleware,req.url,req.method)
    callSomeFunction(req,res,next)
}


let thirdMiddleware = (req,res,next)=>{
    console.log(new Date()+thirdMiddleware,req.url,req.method)
    setTimeout(function(){
        req.middlewareExecuted = req.middlewareExecuted ? req.middlewareExecuted : {};
        next();
    },200);
}

let fourthMiddleware = (req,res,next)=>{
    console.log(new Date()+fourthMiddleware,req.url,req.method)
    throw("Somethin unexpected happened!!!")
    next()
}


let errorMiddleware = (err,req,res,next)=>{
    console.log(new Date()+errorMiddleware,req.url,req.method)
    req.middlewareExecuted = req.middlewareExecuted ? req.middlewareExecuted : {};
    req.middlewareExecuted.thirdMiddleware = true;
}


let callSomeFunction = (req,res,next)=>{
    req.middlewareExecuted.secondMiddleware = true;
    next()
}


module.exports.firstMiddleware = firstMiddleware;
module.exports.secondMiddleware = secondMiddleware;
module.exports.thirdMiddleware = thirdMiddleware;
module.exports.fourthMiddleware = fourthMiddleware;
module.exports.errorMiddleware = errorMiddleware;


