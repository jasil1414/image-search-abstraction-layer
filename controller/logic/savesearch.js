var searchStore = require('../../model/searchStore');

module.exports = function (query, count){
  searchSave = new searchStore();
  searchSave.term = query;//search String
  searchSave.when = new Date() //time of search
  searchSave.save(function(err,data){
    if (err) throw err;
    console.log('Succesfully saved data');
  })
}
