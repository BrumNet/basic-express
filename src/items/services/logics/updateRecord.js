const {model} = require(`../../model/model`)

exports.patchReq = function(req,res){
    var result = model.patchRecord(req.params.id,req.params.item) 
    var code =  result[0] != null ? result[1] ? 201 : 409 : 400
    var msg = result[0] != null ? result[1] ? "SUCCESS" : "FAILED" : "BAD REQUEST"
    return res.send({message: msg, code: code})
}