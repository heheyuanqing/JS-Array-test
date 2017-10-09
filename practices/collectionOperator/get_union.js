'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result =[];
  var arr = collection_a;

  collection_b.map(function (num) {
    arr.push(num);
  });

  // arr.forEach(function (num) {
  //   if(result.indexOf(num) === -1){
  //     result.push(num);
  //   }
  // });

  var set = new Set(arr);
  result=Array.from(set);


  return result;
}

module.exports = get_union;

