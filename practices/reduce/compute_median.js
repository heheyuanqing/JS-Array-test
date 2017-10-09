'use strict';

function compute_median(collection) {
  //在这里写入代码
  var num;
  var result = [];
  var result_str = collection.join().split(",");

  result_str.map(function (str) {
    result.push(parseInt(str));
  });

  result =arrSort(result);

  if(result.length%2 ===0){
    var l = result[result.length/2];
    var r =result[result.length/2-1];
    num =(r+l)/2
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


module.exports = compute_median;


