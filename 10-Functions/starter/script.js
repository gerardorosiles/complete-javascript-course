'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //Use advanced ES6 literals, declare defuaults in function's signature

//   //ES5 old way
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// console.log('Hello');
// createBooking('LMH123');
// createBooking('LMH123', 2, 800);
// createBooking('LM1234', 3);
// createBooking('LM1234', 5);
// //Note: you can't skip arguments. Need to follow order in which
// //they are defined
// //A trick to skip params and used their default value is to use
// //undefined
// createBooking('LMJ1234', undefined, 350);

// const x = -1;
// const y = x ?? 1;
// console.log(y);

const flight = 'LH234';
const gerardo = {
  name: 'Gerardo Rosiles',
  passport: 12334545,
};

//primitive types are passed by value, a copy of the value passed
//if placed in the paramereter
//objet types are passed by reference. Objets live in the heap
//any change to object inside the function are preserved after
//function is done
const checking = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport == 12334545) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
  console.log(flightNumber, passenger);
};

checking(flight, gerardo);
console.log(flight, gerardo);
