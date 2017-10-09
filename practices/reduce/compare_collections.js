'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag = collection_a;
  collection_b.map(function (num_b) {
      flag.push(num_b);
    });

  var set = new Set(flag);
  var arr = Array.from(set);
  if(arr.length === collection_b.length)
    return true;
  else
    return false;


}

module.exports = compare_collections;


