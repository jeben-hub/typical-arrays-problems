function isValid(array) {
  return Array.isArray(array) && array.length > 0;
}


exports.min = function min (array) {
  if (!isValid(array)) return 0;
  array.sort(function(a, b) {
    return b - a;
  });
  return array.pop();
}

exports.max = function max (array) {
  if (!isValid(array)) return 0;
  array.sort(function(a, b) {
    return a - b;
  });
  return array.pop();
}

exports.avg = function avg (array) {
  if (!isValid(array)) return 0;
  return array.reduce(function(a, b) {
    return a + b;
  }) / array.length;
}
