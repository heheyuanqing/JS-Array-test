'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result = [];
  result = changeArray(collection);
  result = choose_no_repeat_number(result);
  return result;
}

function changeArray(collection) {
  var num =[];
  var result = collection.join().split(',');
  result.map(function (str) {
    num.push(parseInt(str));
  });
  return num;
}
function choose_no_repeat_number(collection) {
  var set = new Set(collection);
  var result = Array.from(set);
  return result;
}

module.exports = double_to_one;
