'use strict'

function removeKeys1(obj, arr) {
  for( let i = 0; i < arr.length; i += +1) {
    delete obj[arr[i]]
}
  return obj;
};

function removeKeys2(obj, arr) {
  let newObj = {};

  for (let key in obj) {
      if (arr.indexOf(key) === -1) {
          newObj[key] = obj[key];
      }
  }
  return newObj;
}


function absDiff(a) {
    return function calculate(b) {
        return Math.abs(a - b);
    }
}
