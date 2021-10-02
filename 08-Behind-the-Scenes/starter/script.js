'use strict';

//this keyword in practice
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcArrow(1970);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;

matilda.calcAge();

//Example of case when this will be undefined with the method borrowing scheme
const f = jonas.calcAge;
f(); // will return an undefined exception since the this keyword for regular functions is undefined
*/
//var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1 - use the "self" or "that" variable
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1985 && self.year <= 1996);
    //   //console.log(this.year >= 1985 && this.year <= 1996);
    // };

    //solution 2 - use an arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1985 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey there ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//Review of the argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 10);

const addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(addArrow(2, 5, 8));

//primitive and reference type
// Primitive times
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference times
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessica2.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
