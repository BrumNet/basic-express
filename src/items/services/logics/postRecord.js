const {model} = require(`../../model/model`)

//validates post body (email, password), etc.
//const { body, validationResult } = require('express-validator');

exports.postSampleRec = function(req,res){
    //req.body;//409
    var item = "New"

    var result = model.postDatabase(item) 
    var code = result ? 201 : 500
    var msg = result ? "SUCCESS" : "FAILED"
    
    return res.send({message:msg,code: code})

};

exports.postRoute = (res, req) => {
    const routeProcess = [
        //auth(res,req), //authenticate
        postSampleRec(res,req),
        /*model.postDatabase(item)
         response(code)
        //transform
        */
        //response,//   
    ]
    exports.promiseCtrl
}