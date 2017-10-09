'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var num =[];
  var result = collection.join().split(',');
  result.map(function (str) {
    num.push(parseInt(str));
  });
  return num;

}

module.exports = double_to_one;
