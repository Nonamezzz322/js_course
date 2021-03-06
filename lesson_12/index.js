
'use strict'

//Написать функцию add, которая принимает один аргумент строку из символов эмодзи, и должна вернуть среднее арифметические значение, суммы двух кодов эмодзи (эмодзи-символы состоят из двух unicode кодов). Например add('🍔😁') вернёт 112359. Если аргумент будет пустой, то его необходимо обработать строку из эмодзи красного сердца и флага украины.

function add(string = '❤️🇺🇦') {
 let sum = 0;
 for (let i = 0; i < string.length; i += 2) {
   sum += string.charCodeAt(i) + string.charCodeAt(i + 1);
 }
 return sum / (string.length / 2);
}

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