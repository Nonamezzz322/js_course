
'use strict'

function add(string) {
    if (string === '') {
     string = '❤🇺🇦';
     }
    let arr = string.split('');
    let sum = 0;
    for (let i of arr) {
        sum += i.codePointAt(0);
    }
    return sum / (arr.length / 2);
}

function clearNumbers(array) {
     for (let y in array) {
        for (let x in array[y]) {
          if (typeof array[y][x] != 'number') { 
             delete array[y][x];
            }                
        }
    }  
        return array;
}

function revers(...arg) {
    let arr1 = [];
    for (let elem of arg) {
        let arr2 = elem.split('');
        let rev = arr2.reverse();
        arr1.push(rev.join(''));
    }
    return arr1.reverse();
}

function splitArray(arr, arrLength) {
  let generalArray = [];  
  let i = [];
  let j = [];
  for (i = 0, j = arr.length; i < j; i += arrLength) {
    generalArray.push(arr.slice(i, i + arrLength));
  }
  return generalArray;
}