// The map() method creates a new array with the results
// of calling a provided function on every element in the calling array.

// --------------------------------------------------------------
// math operations
var someArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]

// --------------------------------------------------------------
// Add tax
var prices = [10,20,30,40,50,60,70,80,90];

function addTax(element) {
  return "$" + (element * 1.08).toFixed(2) // return $ sign + (each element of array times tax ).rounds to hundredth
}

prices.map(addTax); // run map function trhough prices array

// --------------------------------------------------------------
// accessing object properties
var friends = [ {
  "firstname": "Rachel",
  "lastname": "Green",
  "age": 40,
  "height": 173
},
{
  "firstname": "Ross",
  "lastname": "Geller",
  "age": 36,
  "height": 182
}]

function toLower(element){
  return element.firstname.toLowerCase();
}

friends.map(toLower); // rachel, ross


// --------------------------------------------------------------
// Chaining together
var prices = [10,20,30,40,50,60,70,80,90];
var taxRate = 1.08;

function addTax(element) {
  return (element * taxRate) // function to calculate tax
}

function sumTotal(val1, val2) { // function to sum together
  return val1 + val2;
} 

var result = prices.map(addTax).reduce(sumTotal).toFixed(2); //calc tax + sum together + round to 100th

console.log("The total with tax is " + "$" + result); // The total with tax is $486.00