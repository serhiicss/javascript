// http://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

// --------------------------------------------------------------
// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0]));
// false
// true

var is_array = function(value) {
    return Array.isArray(value);
}


// --------------------------------------------------------------
// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]