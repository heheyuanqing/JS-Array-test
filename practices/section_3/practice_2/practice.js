function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b.value.map(function (str_b) {
    collection_a.map(function (obj_a) {
      if(obj_a.key === str_b){
        obj_a.count=Math.ceil(obj_a.count-obj_a.count/3);
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
