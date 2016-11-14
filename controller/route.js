var express = require('express');
var mongoose = require('mongoose');

var searchStore = require('../model/searchStore');
var searchApi = require('./api_search');
var saveSearch = require('./savesearch')

var router = express.Router();
var bingSubscriptionKey = '03900cf9165242aaa0dd820cd197593c'

 router.get('/imagesearch/:search', function(req, res){
  var searchString = req.query.q;
  var count = req.query.count;
  saveSearch(searchString,count);
  console.log(searchString);
  console.log(count);
  var bingUrl ='https://api.cognitive.microsoft.com/bing/v5.0/images/search?q='+searchString+'&count='+count;
  searchApi(bingUrl,bingSubscriptionKey,count,res);
});

router.get('/history', function(req,res){
  searchStore.find({},{"__v":0,"_id":0},function(err, hist){
    console.log(hist);
    if(err) throw err;
    return res.json(hist)
  }).sort({'_id':-1}).limit(5);
});

module.exports = router;
