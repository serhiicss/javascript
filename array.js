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


// array.map iterates trough arrays
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]


// array.reduce iterates trough arrays and condense it into one value
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
});

console.log(singleVal); //30 the total of all values in the array (4+5+6+7+8). Could also substract or any other mat operartion.


// array.filter iterates through an array and filters out elements where a given condition is not true.
var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val){
  return val < 6; // return only values less than 6
});
// will return [1,2,3,4,5]


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