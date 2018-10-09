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
	for (let i = 0; i < arr1.length; i += 1) {
            if (arr1[i].length !== arr2[i].length)
                return NaN;
            else {
                for (let j = 0; j < arr1[i].length; j += 1) {
                    result.push(Math.abs(arr1[i][j] - arr2[i][j]));
                }
            }
        }
    return result.reduce((a, b) => a + b);    
}



//Task 6

// const strangeSearch = (array) => {
//     for (let element of array) {
//         let field = document.createElement('div');
//         document.body.appendChild(field);
//         field.innerText = element;
//         let input = document.createElement('input');
//         input.id = element;
//         field.prepend(input);
//     }
//     let searchBtn = document.createElement('button');
//     searchBtn.value = 'Search';
//     searchBtn.id = 'go';
//     document.body.appendChild(searchBtn);

// };
// strangeSearch(['asd', 'das', 'sda']);