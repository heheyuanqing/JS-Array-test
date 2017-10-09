'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  result.push(number);
 while (1){
   if(number<=0){
     break;
   }
   else{
     number = number -interval;
     number = parseFloat(number.toFixed(1));
     result.push(number);
   }
 }
 return result;
}

module.exports = spilt_to_zero;
