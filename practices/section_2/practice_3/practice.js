function count_same_elements(collection) {
  //在这里写入代码
  var result = [];

  collection.map(function (str) {

    var tag = isExit(result, str.split('')[0]);
    if (tag !== -1) {
      if (str.length > 1) {
        var count = getCount(str);
        result[tag].summary += count;
      }
      else
        result[tag].summary++;
    }

    else {
      if (str.length > 1) {
        var count = getCount(str);
        result.push({name: str.split('')[0], summary: count});
      }
      else
        result.push({name: str, summary: 1});
    }
  });

  return result;
}

function getCount(collection) {

  var number = [];


    for (var j = 1; j <= collection.length; j++) {
      if (!isNaN((collection.charAt(j)))) {

        number.push(j);
      }
    }
    count = parseInt(collection.substring(number[0], number[number.length - 1] + 1));




  return count;
}

function isExit(result, str) {
  var tag = -1;
  for (var i = 0; i < result.length; i++) {
    if (result[i].name === str) {
      tag = i;
      break;
    }
  }
  return tag;
}
module.exports = count_same_elements;
