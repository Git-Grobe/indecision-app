'use strict';

//ES5 functions
var square = function square(x) {
    return x * x;
};

//ES5 named function
function square2(x) {
    return x * x;
}

//ES6 functions
var squareArrow = function squareArrow(x) {
    return x * x;
};

//concise ES6 expression syntax, implicitly returning one thing
var squareArrow2 = function squareArrow2(x) {
    return x * x;
};

//ES5
console.log(square(9));
console.log(square2(9));

//ES6 arrow function
console.log(squareArrow(8));

//ES6 concise arrow function
console.log(squareArrow2(4));

//coding challenge, create function that returns just the first name of string

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('First Last'));
