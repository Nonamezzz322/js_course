'use strict'

const myAge = 23;

function getMyAge (number) {
    if (number >= 5 && number <= 20)
      return 'лет';

    number %= 10;

    if (number == 1)
      return 'год';
    if (number >= 2 && number <= 4)
      return 'года';

      return 'лет';
}
  console.log(`Мой возраст ${myAge} ${getMyAge(myAge)}`)


  const arr1 = [141, 123, -322, 10, 0, 'mrgl_mrgl', null, 4, 3483];

  let min = arr1[0];
  let max = 0;
  for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] > max) max = arr1[i];
      if (arr1[i] < min) min = arr1[i];
  }


  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr1.length; ++i) {
    if(typeof arr1[i] === 'number') {
      sum += arr1[i];
      count += 1;
    }
  }
  let avg = sum / count;

  let negative = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] < 0) {
            negative += 1;
        }
    }
  let notNumber = 0;
    for (let i = 0; i < arr1.length; i += 1) {
          if(typeof arr1[i] != 'number') {
            notNumber += 1;
        }
    }
  let waka = { min, max, avg, negative, 'not a number':notNumber};

   console.log(waka);