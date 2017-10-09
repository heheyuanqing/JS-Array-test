'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(getCharacter(i));
    }
  }
  else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      result.push(getCharacter(i));
    }
  }
  else {
    result.push(getCharacter(number_a));
  }
  return result;
}

function getCharacter(num) {
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
}

// module.exports = get_letter_interval_2;

