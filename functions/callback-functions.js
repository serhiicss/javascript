// this function adds 2 numbers
var add = function(a, b) {
    return a + b;
}

// this funciton multiplies 2 numbers
var multiply = function(a, b) {
    return a * b;
}

// this funciton callsback a specified function above
var calc = function(num1, num2, callback) {
    return callback(num1, num2);
}

// here we call calc function with numbers and a function above as parameters
console.log(calc(2, 6, add));

// result = 8