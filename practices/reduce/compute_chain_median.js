'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var num;
  var result = collection.split("->");
  result =arrSort(result);
  if(result.length%2 ===0){
    var l = result[result.length/2];
    var r =result[result.length/2-1];
    num =(parseInt(r)+parseInt(l))/2
  }
  else{
    num = result[Math.ceil(result.length/2)-1];
  }
  return num;
}

function arrSort(result) {
  result = result.sort(sotrtArr);
  return result;
}
function sotrtArr(m,n) {
  return m-n;
}
module.exports = compute_chain_median;
