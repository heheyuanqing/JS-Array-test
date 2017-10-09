'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  collection = collection.sort();
  var result = collection[0];
  return result;
}

module.exports = collect_min_number;

