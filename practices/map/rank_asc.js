'use strict';
var rank_asc = function(collection){
var result = [];

result = collection.sort(sortArr);

return result;
};

function sortArr(m,n){
  if(m<n)
    return 1;//返回1 使得m在n后面
  else if(m>n)
    return -1;
  else return 0;
}

module.exports = rank_asc;
