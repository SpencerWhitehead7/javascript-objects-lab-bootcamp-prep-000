var recipes = new Object({AAA:170});

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function updateObjectWithKeyAndVaue(object, key, value){
  var newObject = object[key] = value;
  return newObject
}