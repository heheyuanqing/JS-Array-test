'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var result = [];

  collection.map(function (num) {
    if (num % 3 === 0) {
      result.push(num);
    }
  });

  return result;
}

module.exports = choose_multiples_of_three;
