function count_same_elements(collection) {
  //在这里写入代码
  var result = [];

  collection.map(function (str) {

    var tag = isExit(result, str.split('-')[0]);
    if (tag !== -1) {
      result[tag].count++;
    }
    else {
      if (str.length>1){
        var count =parseInt(str.split('-')[1]);
        result.push({key: str.split('-')[0], count:count});
      }
      else
        result.push({key: str , count: 1});
    }
  });

  return result;
}

function isExit(result, str) {
  var tag = -1;
  for (var i = 0; i < result.length; i++) {
    if (result[i].key === str) {
      tag = i;
      break;
    }
  }
  return tag;
}

module.exports = count_same_elements;
