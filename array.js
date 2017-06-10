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
