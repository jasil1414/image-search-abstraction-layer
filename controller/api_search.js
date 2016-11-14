var express = require('express');
var request = require('request');

module.exports = function(bingUrl,bingSubscriptionKey,count,res){

    var options={
    url:bingUrl,
    headers:{
      'Ocp-Apim-Subscription-Key': bingSubscriptionKey
    }
  }

  function callback(err,resp,body){
  var searchResult=[];
  if(!err && resp.statusCode ===200){
    var info = JSON.parse(body);
    //console.log(info);
    for(var i=0; i<count; i++){
        searchResult.push(info.value[i]);
    }

    var requiredSearchResults = searchResult.map(function(search){
      return {
      'name':search.name,
      'url':search.contentUrl,
      'thumbnail':search.thumbnailUrl,
      'context':search.hostPageDisplayUrl
      }
    });
    console.log(requiredSearchResults);
   }
  res.json(requiredSearchResults);
  };
  request(options,callback);
}
