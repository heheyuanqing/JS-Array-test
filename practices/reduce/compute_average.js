'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result = 0;
  collection.map(function (num) {
    result += num;
  });
  return result/collection.length;
}

module.exports = compute_average;

