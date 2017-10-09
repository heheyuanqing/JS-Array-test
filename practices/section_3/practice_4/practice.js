function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var object_a = getArr(collection_a);

  object_b.value.map(function (str_b) {
    object_a.map(function (str_a) {
      if(str_a.key === str_b){
        str_a.count=Math.ceil(str_a.count-str_a.count/3);
      }
    });
  });

  return object_a;
}

function getArr(collection) {
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


module.exports = create_updated_collection;
