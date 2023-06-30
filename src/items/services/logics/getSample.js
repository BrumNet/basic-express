const {model} = require(`../../model/model`)

function getRecord(req, res) {
    const data =  model.getDatabase;
    var msg = data[0] == null ? "NOT FOUND": "SUCCESS" 
    var code = data[0] == null ? 404: 200
    return res.send({message: msg, data: data, code: code})
 }
 
 module.exports.default = getRecord