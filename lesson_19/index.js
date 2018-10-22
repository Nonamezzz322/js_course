
function Human(name = 'Анатолий', age = 23) {
	this.name = String(name);
	this.age = +age;	
}


Human.prototype.sayHello = function() {
  console.log(`Hello, my name is  ${this.name}, i am ${this.age} years old`);
};

// let a = new Human();
// a.sayHello();

function AlevelStudent (name = 'Анатолий', age = 23, marks = [1, 2, 3, 4, 5]) {
  this.name = String(name);
  this.age = +age;
  this.marks = marks;
}

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;

// let b = new AlevelStudent(undefined, undefined, [5, 1, 3, 675, 9]);

AlevelStudent.prototype.averageMark = function () { 

  let sum = 0;
    for(let i = 0; i < this.marks.length; i += 1) {
      sum += this.marks[i];
    }
  let result = sum / this.marks.length;

  console.log (result); 
}

// b.averageMark();