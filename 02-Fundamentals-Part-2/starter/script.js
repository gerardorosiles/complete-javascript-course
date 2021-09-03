'use strict';

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schemedtmann',
    birthYear : 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge: function() {
        this.age =  2037 - this.birthYear;
        return(this.age);
    },

    getSummary: function() {
        this.calcAge();

        return `${this.firstName} is a ${this.age} old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`

    }
}

//console.log(jonas.calcAge());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

jonas.hasDriverLicense=false;
console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects 
to implement the calculations! Remember:
 BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, 
and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI 
(the same method on both objects). Store the BMI value to a property, 
and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name 
and the respective BMI. Example: "John Smith's BMI (28.3) is higher than 
Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; 
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI; 
        
    }
};
console.log(mark.calcBMI(), john.calcBMI());

if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
} else if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`); 
}




