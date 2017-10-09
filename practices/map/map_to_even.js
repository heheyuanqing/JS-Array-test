'use strict';
function map_to_even(collection){
  var result = [];

  collection.map(function (num) {
    result.push(num*2);
  });

  return result;
}
module.exports = map_to_even;
