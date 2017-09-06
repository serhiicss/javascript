function belowTen(num) {
    if (num <= 10) {
        return true;
    }
    return false;
}

// == equal to
// === strictly equal to 
// != not equal to
// !== strictly not equal to
// > < greater or lower
// >= greater or equal to
// <= less than or equal to

// && returns true if all operands are true

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25 && == 30) {
      return "Yes"
    };

  return "No";
}
testLogicalAnd(30) //true
testLogicalAnd(11) //false

// || returns true if either one of the operands are true

function testLogicalAnd(val) {

  if (val <= 50 && val == 50) {
      return "Yes"
    };

  return "No";
}
testLogicalAnd(30) //true
testLogicalAnd(50) //true
testLogicalAnd(55) //false


// Conditional (ternary) Operator
// condition ? expr1 : expr2
// If condition is true, the operator returns the value of expr1;
// otherwise, it returns the value of expr2.

var age = 18;
var canIvote = (age >= 18) ? true : false;
var canIvote = (age >= 18) ? "You can vote" : "Come back whne you are 18";