function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  collection_a.map(function (str_a) {
    object_b.value.map(function (str_b) {
      if (str_a.key === str_b) {
        result.push(str_a.key);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
