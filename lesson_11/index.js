'use strict'

function RemoveKeys1(obj, arr){
    for (let objElem of (Object.keys(obj))){
        for (let arrElem of arr){
            if (objElem === arrElem){
                delete obj[objElem];
            }
        }
    }
    return obj;
}

function RemoveKeys2(obj, arr) {

  let newObj = obj;
    for (let objElem of (Object.keys(obj))) {
        for (let arrElem of arr) {
            if (objElem === arrElem) {
                delete newObj[objElem];
            }
        }
    }
    return newObj;
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