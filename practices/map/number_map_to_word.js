'use strict';
var number_map_to_word = function(collection){
  var result = [];

  collection.map(function (num) {
    result.push(String.fromCharCode(num+96));
  });

  return result;
};

module.exports = number_map_to_word;
