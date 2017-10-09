'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];

  collection.map(function (num) {
    result.push(getCharacter(num));
  });

  return result;
};

function getCharacter(num) {
 var str;
  if (num <= 26) {
    str = String.fromCharCode(num + 96);
  }
  else {
    var num_1 = num / 26;
    var num_2 = num % 26;

    if (num_2 == 0) {
      num_1--;
      num_2 = 26;
    }

    str = String.fromCharCode(num_1 + 96) + String.fromCharCode(num_2 + 96);
  }
  return str;
}

module.exports = number_map_to_word_over_26;
