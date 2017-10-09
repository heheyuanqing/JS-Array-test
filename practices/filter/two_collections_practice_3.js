'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码

    var flag=0;
    var result = [];
    collection_a.map(function (str_a) {
      collection_b.map(function (str_b) {
        if (str_a%str_b === 0) {
          flag = 1;
        }
      });
      if(flag === 1){
        flag=0;
        result.push(str_a);
      }

    });
    return result;


}

module.exports = choose_divisible_integer;
