var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}
// 12

// --------------------------------------------------------------
function totalSum(a, b) {
    console.log(a + b);
}

totalSum(5, 10); //15

// global scope variables
var meIsGlobal = "foo";
meIsGlobalToo = "foo";

function inFunctionToo(a,b) {
    var meIsLocal = "foo"
    meIsGlobal = "foo" // global var, as var declaration was ommited
}

// same global and local var
var someVar = "foo";

function localOrGlobal() {
    var someVar = "foo2"
    return someVar;
}

localOrGlobal(); //foo2. local variable takes precedence

function timesFive(num) {
    return num * 5;
}

//-------------------------------------------------------------------

let calC = function(num1, num2, calcType){
  if (calcType === "add"){
    return num1 + num2;
  } else if (calcType === "divide") {
    return num1 / num2;
  }
}

calC(10, 20, "add");


// or

let add = function(a,b){
  return a+b;
}

let divide = function(a,b){
  return a/b;
}

let calC = function(num1, numb2, callback){
  return callback(num1, numb2);
}

calC(10, 20, divide);