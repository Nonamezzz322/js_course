'use strict'

/*Разработать диалог с пользователем
Написать функцию calculate()
Которая начнет диалог с пользователем с помощью prompt:
Если пользователь пишет “exit” на любом этапе - функция заканчивается и 
возвращает значение
Первый диалог: Выбор формулы y = kx + b или y = x^2. Дать пользователю 
выбор с помощью prompt, если введет 1 то первая, если 2 - то вторая, если
 значение невалидное, повторить показ диалога
После Выбора формулы необходимо предоставить возможность задать значения 
каждого из аргументов (k, x, b) для первой и (x) для второй, если значение
 не валидное - повторять показ диалога
Рассчитать y по выбранной форме используя введенные аргументы, вывести в alert
Начать с начала
Возвращаемое значение функции это объект: {
    history: [‘2’, ‘4’, ‘exit’], // история всех введенных пользователем
     сообщений в prompt
    formula: ‘y = x^2’, // последняя выбранная формула
    args: { x: 4 }, // аргументы введенные пользователем для последней формулы
*/

let k = "";
let x = "";
let b = "";
let obj = {history: [], formula: "", args: {}};


function calculate() {
    let input = prompt(`Выберите формулу y = kx + b (введите "1") или y = x^2 (введите "2"). Введите "exit", чтобы выйти.`);
    obj.history.push(input);
    if (input === 'exit') {
    return;
  } else if (input === "1") {
    obj.formula = 'y = kx + b';
        return calcK();
    } else if (input === "2") {
      obj.formula = 'y = x^2';
        return calcForm2();
    } else {
        return calculate();
    }
}



// Выбрана формула 1




function calcForm1() {
  let form1 = {k, x, b};
  obj.args = form1;
    let y = +k * +x + +b;
    alert(y);
    return calculate();
}

function calcK() {
    let kCalc = prompt(`Задайте значение "k" (y = kx + b). Введите "exit", чтобы выйти.`);
    obj.history.push(kCalc);
    if (kCalc === 'exit') {
    return;
  } else if (kCalc === "" || kCalc === null || isNaN(kCalc)) {
    return calcK(); 
  } else {
    k = kCalc;
      return calcX();
  }
}

function calcX() {
    let xCalc = prompt(`Задайте значение "x" (y = kx + b). Введите "exit", чтобы выйти.`);
    obj.history.push(xCalc);
    if (xCalc === 'exit') {
    return;
  } else if (xCalc === "" || xCalc === null || isNaN(xCalc)) {
    return calcX(); 
  } else {
    x = xCalc;
      return calcB();
  }
}

function calcB() {
  let bCalc = prompt(`Задайте значение "b" (y = kx + b). Введите "exit", чтобы выйти.`);
  obj.history.push(bCalc);
  if (bCalc === 'exit') {
    return;
  } else if (bCalc === "" || bCalc === null || isNaN(bCalc)) {
    return calcB(); 
  } else {
    b = bCalc;
      return calcForm1();
  }
}



//Выбрана формула 2



function calcForm2() {
  let zCalc = prompt('Задайте значение "x" (y = x^2). Введите "exit", чтобы выйти.');
  obj.history.push(zCalc);
  let form1 = {x: zCalc};
  obj.args = form1;
  if (zCalc === 'exit') {
    return;
  } else 
  if (zCalc === "" || zCalc === null || isNaN(zCalc)) {
    return calcForm2(); 
  } else {
    let y = +zCalc * +zCalc;
    alert(y);
    return calculate();
  }
}
