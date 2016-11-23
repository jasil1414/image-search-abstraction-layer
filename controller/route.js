var express = require('express');
var mongoose = require('mongoose');

var searchStore = require('../model/searchStore');
var searchApi = require('./logic/api_search');//search handler
var saveSearch = require('./logic/savesearch')//save search

var router = express.Router();
var bingSubscriptionKey = //add bing subscription key here.

 router.get('/', function(req,res){
   res.render('index');
 });

 router.get('/imagesearch/:search', function(req, res){
  var searchString = req.query.q;//search string from url request
  var count = req.query.offset;//count from url request
  saveSearch(searchString);//save the search String
  var bingUrl ='https://api.cognitive.microsoft.com/bing/v5.0/images/search?q='+searchString+'&count='+count;
  searchApi(bingUrl,bingSubscriptionKey,count,res);//perfor the search and gets the result
});

//get the recent search
router.get('/history', function(req,res){
  searchStore.find({},{"__v":0,"_id":0},function(err, hist){
    //console.log(hist);
    if(err) throw err;
    return res.json(hist)
  }).sort({'_id':-1}).limit(15);//negative on id to sort according to recent search and limit to get only 15 recent
});

module.exports = router;
