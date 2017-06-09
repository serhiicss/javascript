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