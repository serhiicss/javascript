// multi-dimensional array
var arr = [
[1,2,3],
[4,5,6],
[7,8,9],
[[10,11,12], 13, 14]
];


// creating an empty object
var foo = [];

// add values to the array using push method
var foo = [];
foo.push("bar");
foo.push(100);
// foo = ["bar", 100];

// BRACKET NOTATION
//access array via bracket notation

// One way to think of a multi-dimensional array, is as an array of arrays.
// When you use brackets to access your array, the first set of bracket refers to the entries in the outer-most array,
// and each subsequent level of brackets refers to the next level of entries inside.

var arr = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14] ];

arr[0]; // equals [1,2,3] (first array)
arr[1][2]; // equals 6 (3rd entry within 2nd array)
arr[3][0][1]; // equals 11 (2nd entry within first array within 3rd array)


arr.push // adds an element to the end of an array
arr.unshift // adds an element to the start of an array
arr.pop // removes the last element of an array
arr.shift // removes the first element of an array



// --------------------------------------------------------------
// WORKING WITH ARRAYS:
// --------------------------------------------------------------


// The indexOf() method returns the first index at which a given element can be found in the array,
// or -1 if it is not present.

var a = [2, 9, 9]; 
a.indexOf(2); // 0 
a.indexOf(7); // -1
a.indexOf(9, 2); // 2 - explanations: 2nd parameter indicates the position of the array
// where the search begins. In this case it starts at poisiton 2 which is second 9. 

// The lastIndexOf() starts searching from the end of the array

// --------------------------------------------------------------


// for loop
var myArr = [ 1, 2, 3];

var myTotal = 0;
for (var i = 0; i < myArr.length; i++) {
  myTotal += myArr[i];
}
//myTotal = 6; 0+1+2+3=6


// array.map iterates trough arrays
// array.map(function callback(currentValue, index, array)
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]


// array.reduce iterates trough arrays and condense it into one value
// arr.reduce(callback(previousValue, currentValue, currentIndex, array ))
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
});

console.log(singleVal); //30 the total of all values in the array (4+5+6+7+8).
// Could also substract or any other math operartion.

// TIPS: for objects:
singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal.name; // not previousVal.name + currentVal.name
}, 0); // declare initialvalue (0) and use previousVal without dot notation.

// --------------------------------------------------------------
// filter
// --------------------------------------------------------------
// array.filter iterates through an array and filters out elements where a given condition is not true.
// parameters: (element, index, array)
var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val){
  return val < 6; // return only values less than 6
});
// will return [1,2,3,4,5]

// using a function
var friends = ["Rachel", "Joey", "Ross", "Phebe", "Monica", "Chandler"];

function filteredFriends (name) {
  return name.length < 5;
}

var shortNames = friends.filter(filteredFriends); //[ 'Joey', 'Ross' ]

// every
// array.every method tests whether all elements in the array 
// pass the test implemented by the provided function.
function isBigEnough(element, index, array) { 
  return element >= 10; 
} 
[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true

// some
//  method tests whether some element in the array
// passes the test implemented by the provided function.
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true


// --------------------------------------------------------------
// sort
// --------------------------------------------------------------
// array.sort
var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]

scores.sort(function(a, b){
    return a - b; // from smallest to largest
}); // [1, 2, 10, 21]

scores.sort(function(a, b){
    return b - a; // from largest to smallest
}); // [ 21, 10, 2, 1 ]


// array.reverse
var array = [1,2,3,4,5,6,7];
var newArray = [];

newArray = array.reverse(); // [ 7, 6, 5, 4, 3, 2, 1 ]

// array.slice slices an element based on parameters array.slice(1,3)
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3); // ['one', 'two'] slices from before index 1 and after index 3

// array.splice slices an element based on parameters and returns spliced values
var a = ['zero', 'one', 'two', 'three'];
var spliced = a.splice(1, 3); // ['zero'] returns spliced element. 
//Also adds elements at specified index, see MDN.

// array.contact
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];

newArray = oldArray.concat(concatMe); // [1,2,3,4,5,6]

// array.split splits a string into an array
var string = "Split me into an array";
var array = [];

array = string.split(' '); // [ 'Split', 'me', 'into', 'an', 'array' ] splits between spaces

// array.join  joins each element of an array into a string separated by whatever delimiter you provide as an argument.
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

joinedString = joinMe.join(" "); // ['Split me into an array']

// The .isArray() function determines whether the passed value is an Array.
var string = "Split me into an array";
var joinMe = ["Split","me","into","an","array"];

var test1 = Array.isArray(string); //false
var test1 = Array.isArray(joinMe); //true
