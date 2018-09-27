'use strict'

function removeKeys1(object, keys) {
  for (let i = 0; i < keys.length; i += 1) {
    delete object[keys[i]];
  }

  return object;
}

function removeKeys2(object, omit) {
  const result = {};
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    let exist = false;

    for (let j = 0; j < omit.length; j += 1) {
      if (key === omit[j]) {
        exist = true;
        break;
      }
    }

    if (!exist) {
      result[key] = object[key];
    }
  }

  return result;
}


function absDiff(a) {
    return function calculate(b) {
        return Math.abs(a - b);
    }
}

//второй, возможно правильный вариант решения
// function removeKeys2(obj, arr) {
//     let newObj = {};
//     for (let objElem of Object.keys(obj)) {
//         for (let arrElem of arr) {
//             if (objElem === arrElem) {
//                 delete obj[objElem];
//             }
//         }
//     }
//     let keys = Object.keys(obj);
//     for (let element of keys){
//         newObj[element] = obj[element];
//     }
//     return newObj;
// }
