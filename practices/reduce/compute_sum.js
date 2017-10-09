'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum = 0;
  collection.map(function (num) {
    sum += num;
  });
  return sum;
}

module.exports = calculate_elements_sum;

