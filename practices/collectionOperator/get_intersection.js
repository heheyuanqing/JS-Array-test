'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_b.map(function (num_b) {
    collection_a.map(function (num_a) {
      if (num_a === num_b) {
        result.push(num_a);
      }
    });
  });
  return result;
}

module.exports = get_intersection;
