
'use strict'

//Написать функцию add, которая принимает один аргумент строку из символов эмодзи, и должна вернуть среднее арифметические значение, суммы двух кодов эмодзи (эмодзи-символы состоят из двух unicode кодов). Например add('🍔😁') вернёт 112359. Если аргумент будет пустой, то его необходимо обработать строку из эмодзи красного сердца и флага украины.

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
console.log(add(''));
//Написать функцию clearNumbers, которая принимает один аргумент - массив массивов. Функция должна вернуть этот же массив массивов, но очистив их от не числовых значений.

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
console.log(clearNumbers([[23421, 2123, 'wfe'], ['werfe', 2, 32]]));
//Написать функцию revers, которая принимает бесконечное количество аргументов, где каждый и них - строка. Функция должна вернуть массив строк в обратном порядке, где каждая строка - будет задом-наперед, Например: revers('123', '456')вернет ['654', '321']

function revers(...arg) {
    let arr1 = [];
    for (let elem of arg) {
        let arr2 = elem.split('');
        let rev = arr2.reverse();
        arr1.push(rev.join(''));
    }
    return arr1.reverse();
}
console.log(revers('123', '456'));
//Написать функцию splitArray которая первым аргументом принимает массив чисел, а вторым количество элементов в подмассивах. Функция должна вернуть массив массивов. Например:  splitArray([1, 4, 5, 6, 2], 2) вернет [[1, 4], [5, 6], [2]]. Если количества элементов недостаточно - последний подмассив может содержать меньшее количество элементов.

function splitArray(arr, arrLength) {
  let generalArray = [];  
  let i = [];
  let j = [];
  for (i = 0, j = arr.length; i < j; i += arrLength) {
    generalArray.push(arr.slice(i, i + arrLength));
  }
  return generalArray;
}
console.log(splitArray([1, 4, 5, 6, 2], 2));