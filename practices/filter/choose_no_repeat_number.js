'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var set = new Set(collection);
   var result = Array.from(set);
   return result;
}

module.exports = choose_no_repeat_number;
