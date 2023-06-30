const {model} = require(`../../model/model`)

exports.deleteReq =  function (req,res){
    var result = model.deleteRecord(req.params.id)
    return res.send({code: result ? 404: 200 })
}