const express = require('express')

const router = express.Router();
//const getSample = require("./services/logics/getSample.js").default

const services = require('./services/index.js').logic

//GET
router.get('/sample', services.getSample);//get whole database
//router.get('/sample/:id', getSample);//get one record

//POST
router.post('/sample', services.postRecord)

//UPDATE
router.patch('/sample/:id/changeitemto/:item/', services.patchRecord);

//DELETE
router.delete('/sample/:id', services.deleteRecord);

//router.use('/js', express.static(__dirname + '/../../node_modules/../')); // redirect 

router.get('/html', (req, res) => {
    res.sendFile(require('path').normalize(__dirname + '/views/index.html'));
  });
  
 
module.exports = router;

module.exports = router;