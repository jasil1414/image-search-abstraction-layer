var searchStore = require('../model/searchStore');

module.exports = function (query, count){
  searchSave = new searchStore();
  searchSave.term = query;
  searchSave.when = new Date()
  searchSave.save(function(err,data){
    if (err) throw err;
    console.log('Succesfully saved data');
  })
}
