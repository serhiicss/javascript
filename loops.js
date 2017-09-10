//---------------------------------------------------------------
// for loop
//---------------------------------------------------------------
for ([initialization]; [condition]; [final-expression])

//Iterate With a For Loop
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Iterate Odd Numbers With a For Loop
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Count Backwards With a For Loop 
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Iterate Through an Array
var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
   console.log(arr[i]);
}

// add value of each element to new var 
var myArr = [ 2, 3, 4, 5, 6];

var myTotal = 0;
for (var i = 0; i < myArr.length; i++) {
  myTotal += myArr[i];
}

//---------------------------------------------------------------
// Backward loop (notice -1 for array length. Array length starts from 1 while position of elements starts at 0)
var vacationSpots = ['Paris', 'London', 'Barcelona'];

for (var i = vacationSpots.length -1; i >= 0 ; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

//---------------------------------------------------------------
// Nesting 'for' Loops

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// Multiply by each number in sub-arrays
function multiplyAll(arr) {
  var product = 1;
  for ( var i = 0; i < arr.length; i++ ) {
    console.log("pass 1");
    for ( var j = 0; j < arr[i].length; j++ ) {
      console.log([i][j]);
      product = product * arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
//---------------------------------------------------------------

//---------------------------------------------------------------
// while loop
//---------------------------------------------------------------

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}