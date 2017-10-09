'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var flag=0
  var result = [];
  collection_a.map(function (str_a) {
    collection_b.map(function (str_b) {
      if (str_a === str_b) {
      flag = 1;
      }
    });
    if(flag === 0){
      result.push(str_a);
    }
    else{
      flag=0;
    }
  });
  return result;

}

module.exports = choose_no_common_elements;
