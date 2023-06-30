const deleteRecord = require("./logics/deleteRecord.js").deleteReq
const getSample = require("./logics/getSample.js").default
const postRecord = require("./logics/postRecord.js").postSampleRec
const patchRecord = require("./logics/updateRecord.js").patchReq


const logic = {
    deleteRecord,
    getSample,
    postRecord,
    patchRecord
}

module.exports.logic = logic