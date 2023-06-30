//const mysqlPromise = require('../config/database');

const {database} = require('./config/sampleDatabase.js') //in json
 
const model = {
 getDatabase : database,
 
 getRecord(id){
  return database[id];
},
    
 postDatabase : (param) => {
 var newid = 0;
 var len = database.length;
 if ( len > 0) {
 newid= database[len - 1].id + 1;
 }
  var date = new Date();
  var items = param;

  var dt = date.toLocaleString();

  database.push({id:newid,item:items,createdTime:dt,status:"new Update"});
  
  return database.length > len ? true : false;
  },

  patchRecord : (id,item) => {
    console.log('exec')
    var result = {}; result[0] = false; //monitor existence of data
    if (database[id] == null){ return result}
    result[1] = database[id].item == item ? false : true; //monistor replication of data

    if(result[1]){
      database[id].item = item; //replace
    }

    return result;
  },

  //delete
  deleteRecord(location){
   var itemtodelete = database[location];
    database.splice(database.indexOf(itemtodelete),1)
  }
} 

exports.model = model;