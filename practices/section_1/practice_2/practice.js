function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var arr_b = collection_b[0];
  collection_a.map(function (str_a) {
    arr_b.map(function (str_b) {
      if (str_a === str_b) {
        result.push(str_a);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
