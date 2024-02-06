// Set a variable for age.
let myAge = 19;

// Set a variable for early years.
let earlyYears = 2;
earlyYears *= 10.5;

// Subtract 2 from myAge to account for the earlyYears.
let laterYears = myAge - 2;

// Multiply the remaining years of age after accounting for early years by 4.
laterYears *= 4;

// console.log(earlyYears, laterYears);

// Calculate my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

// Set a variable for my name.
const myName = 'Damien Aldridge'.toLowerCase();

// Print a statement about my name and my age in human and dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
