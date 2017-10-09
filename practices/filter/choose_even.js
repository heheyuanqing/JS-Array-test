'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = [];
  collection.map(function (num) {
    if (num % 2 == 0) {
      result.push(num);
    }
  });
}

module.exports = choose_even;
