'use strict'
//Task 1
function itsMe(a = 'Nonamezzz322') {
	console.log(`It’s me, ${a}`);
	return `It’s me, ${a}`;
}

//Task 2
function compare(numberOne, numberTwo) {
	if (numberOne > numberTwo) {
		return `${numberOne} > ${numberTwo}`;
	} else if (numberOne < numberTwo) {
		return `${numberOne} < ${numberTwo}`;
	} else if (numberOne === numberTwo){
		return `${numberOne} == ${numberTwo}`;
	} else {
		return 'НЕ ЧИСЛО';
	}
};
//Task 3
function row(a, b, c, string) {
	let count = [a, b, c];
	if (string === '<') {
		count.sort();
		return count.join(' < ');

	} else if (string === '>') {
		count.sort();
		count.reverse();
		return count.join(' > ');
	}
}
//Task 4
function fact(number) {
	if (number === 0){
		return 1;
	} else {
		return (number != 1) ? number * fact(number - 1) : 1;
	}

}
//Task 5
function matrixDiff(arr1, arr2) {
	let result = [];
    if (arr1.length === arr2.length)
    	for (let i = 0; i < arr1.length; i += 1) {
            if (arr1[i].length === arr2[i].length)
               for (let j = 0; j < arr1[i].length; j += 1) {
                    result.push(Math.abs(arr1[i][j] - arr2[i][j]));
                }  
            else {
                return NaN;
            }
        }
    else {
  		return NaN;
    }
    return result.reduce((a, b) => a + b);
}


//Task 6

function strangeSearch(array) {
  let arrInput = [];
  let arrSort = [];
    for (let element of array) {
        let item = document.createElement('div');
        document.body.appendChild(item);
        item.innerText = element;
        let input = document.createElement('input');
        input.type = 'number';
        input.value = 0;
        input.id = element;
        item.prepend(input);
        arrInput.push(input);
    }
    let go = document.createElement('button');
    go.innerText = 'Search';
    go.id = 'go';
    document.body.appendChild(go); 
    go.addEventListener('click', () => {
      arrInput.sort((a, b) => b.value - a.value);
      console.log(arrInput);
      for (let element of arrInput) {
        if (element.value > 0) {
          arrSort.push(element.id);
        }
      }
        window.location.href = `https://www.youtube.com/results?search_query=${arrSort.join('+')}`;
    });
}