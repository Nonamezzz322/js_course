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
    let newObj = {};
    for (let objElem of (Object.keys(obj))){
        for (let arrElem of arr){
            if (objElem !== arrElem){
                newObj[objElem] = obj[objElem];
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