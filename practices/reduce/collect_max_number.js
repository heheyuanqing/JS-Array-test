'use strict';

function collect_max_number(collection) {
  //在这里写入代码
/*
  collection = collection.sort();
var result = collection[collection.length-1];
  return result;
*/
var max = collection.reduce(function (pre,next) {
  if (pre<next){
    return next;
  }
  else
    return pre;
});
return max;
}

module.exports = collect_max_number;
