'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码


  var result = [];
  collection_a.map(function (str_a) {
    collection_b.map(function (str_b) {
      if (str_a === str_b) {
        result.push(str_a);
      }
    });
  });
  return result;

}

module.exports = choose_common_elements;
