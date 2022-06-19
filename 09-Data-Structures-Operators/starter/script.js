'use strict';

// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//ES6 enhanced object literals
//computer property names instead of having to
//write them manually or literally

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  //ES6 enhnaced object literal for methods
  //no need to use the function reserved word
  //just name property with params directly

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //orderDelivery: function (obj) {
  //Perform destructiring directly on the function parameter  list on objects passed to functions
  //can also assign default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Oder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngedients) {
    console.log(mainIngredient);
    console.log(otherIngedients);
  },
};

///////////////////////////////////////
// Coding Challenge #4
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  let output = `${type.startsWith('_Delayed') ? '🔴' : ''}`;
  output += type.replaceAll('_', ' ');
  output += ` ${getCode(from)} to ${getCode(to)}}`;
  output += `(${time.replace(':', 'h')})`;
  output = output.padStart(40);
  console.log(output);
}

/* 
Write a program that receives a list of variable names written 
in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM 
(see code below), and conversion will happen when the button 
is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const varString = document.querySelector('textarea').value;
  converToCamelCase(varString);
  document.querySelector('textarea').value = '';
});

function converToCamelCase(varString) {
  const underScoreVars = varString.split('\n');

  for (const [j, v] of underScoreVars.entries()) {
    const splitVarArray = v.trim().toLowerCase().split('_');

    let camelCaseVar = '';
    for (const [i, s] of splitVarArray.entries()) {
      if (i > 0) {
        camelCaseVar += s[0].toUpperCase() + s.slice(1);
      } else {
        camelCaseVar = s;
      }
    }

    console.log(camelCaseVar.padEnd(20) + '✅'.repeat(j + 1));
  }
}
*/
// const varString =
//   'underscore_case \n first_name \n Some_Variable \n calculate_AGE \n delayed_departure ';

// converToCamelCase(varString);

/*
/////////////////////////////////
// Working with Strings - Part 3

//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('jose gerardo rosiles');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

const planesInLineArrow = n => {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planesInLineArrow(4);
planesInLineArrow(6);
*/
/*
////////
//Working with strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.IO \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288.97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320 neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

const checkBaggageArrow = items => {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

checkBaggageArrow('Shirt, Pants, SHOES');
checkBaggageArrow('Knife, Gun, Fedora');
*/
/*
/////////
//Working with strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B733'.length);

//string methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//use slice method to extract parts of strings
//e.g., substrings
console.log(airline.slice(4)); //returns a new string
console.log(airline.slice(4, 7)); //Using and end value. The end value is not extracted, only 4,5,6
//length 7 - 4 = 3

//using other methods to extract posiitonal indices
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//Practice
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('You got the middle seat 😀');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Strings are primitives, JS behind the scene takes the string and converts it
//to a string object, i.e., boxes the string primitive
//see the methods for this String object in the console
console.log(new String('jonas'));

//when operation is done, the object is converted back to a
//regular spring primitive ... All String method return a string
//primitice
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
   (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, 
   exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Question 1
for (const [index, scorer] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${scorer}`);
}

//Question 2
//2. Use a loop to calculate the average odd and log it to the console
//   (We already studied how to calculate averages, you can go check if you don't remember)
const values = Object.values(game.odds);
let sum = 0;
for (const v of values) {
  sum += v;
}
console.log(`odds average = ${sum / values.length}`);

//Question 3
// Example output format
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
const odds_keys = Object.keys(game.odds);
for (const s of odds_keys) {
  const favorite_result = game[s] ?? 'draw';
  console.log(`Odd of victory ${favorite_result} : ${game.odds[s]}`);
}
console.log();

//Question 4
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
const scorers = {};

for (const s of game.scored) {
  scorers[s] ? scorers[s]++ : (scorers[s] = 1);
}
console.log(scorers);
*/
/*
//Looping Objects, Objects key, values and entries
// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days on :`;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

//Property Values
const values = Object(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open: starting, close: ending }] of entries) {
  console.log(`On ${day} we open at ${starting} and close at ${ending}`);
}
*/
/*
//conditional chaining
//short circuiting with &&
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
console.log(restaurant.openingHours?.mon?.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open at ${open}`);
}
//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
*/
//
//Enhanced object literals
//see mods to restaurant object
/*
//for off
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(` ${item[0] + 1}: ${item[1]}`);
// }

//use destructuring
for (const [i, el] of menu.entries()) {
  console.log(` ${i + 1}: ${el}`);
}
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Step 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//Step 2
const [gk, ...fieldPlayers] = players2;
console.log(gk);
console.log(fieldPlayers);

//Step 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Step 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Step 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Step 6
const printGoals = function (...scorers) {
  for (let i = 0; i < scorers.length; i++) {
    console.log(scorers[i]);
  }
  console.log(`Total Goals : ${scorers.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

//Step 7
(team1 < team2 && console.log('Team 1 more likely to win')) ||
  (team2 < team1 && console.log('Team 2 more likely to win'));
*/
/*
//The spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Diference with desctructuring of arrays. Can only be used when ALL elements need to be separated by commas, it does not create new variables

//Use cases:
//1. Create shallow copy of array
//2. Merge two arrays together

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Merge arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);
console.log('J', 'o');

//Can't use it in literal strings
//console.log(`${...str} S.`);

//Real world example
//Use spread operator in functions
const ingredients = [
  // prompt("Let's mage pasta! Ingredient 1>"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Since ES16, you can also use the spread operator with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giussepe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
//SPREAD, because  on RIGHT side of  =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//Use any data type, return any data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
*/

/*
console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish operator: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
//Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//destructuring members of an object and chaging their name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//assigning default values to destructuring elements
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

console.log(a, b);
//Need to enclose the expression in parenthesis
//otherwise the {} will be interprested as a code block
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri } = openingHours;
console.log(fri);

//destructring nested object, changing variable name, using defaults
const {
  fri: { open: friOpen, close: friClose, friLunch = [] },
} = openingHours;
console.log(friOpen, friClose, friLunch);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 1,
  starterIndex: 1,
});


restaurant.orderDelivery({
  address: 'Via del Sol, 21',
});

// restaurantName = 'Tatocotoe';
// tags[0] = 'Mexican';
// console.log(restaurantName, restaurant.name);
// console.log(tags, restaurant.categories);
*/
/*
/////////////////////
// Destructuring arrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//classical approach to switch variable values
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//variable swithching with array destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receiving multiple return values from a function using array destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//destructuring all elements on nested array
//do destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values, useful when you don't know how many
//params you are getting back from a call to a function,
//API, etc.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
