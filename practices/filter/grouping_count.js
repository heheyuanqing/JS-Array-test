'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var result= {};
  var flag =0;

  for(var i=0;i<collection.length;i++){
    var key = isExit(result,collection[i]);
    if(key!==0){
      result[key]++;
    }
      else result[String(collection[i])] = 1;
    }


  return result;
}

function isExit(result,num) {
  var flag =0;
  for (var index in result){
    if (parseInt(index) === num)
    {
    flag =parseInt(index);
    break;
    }
  }
  return flag;
}

module.exports = grouping_count;
