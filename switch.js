switch (5) {
  case 4  :
    console.log("Not correct")
    break;
  case 5 :
    console.log("This is correct")
    break;
  default:
  console.log("Who is your daddy")
}

// use break to stop the sctipt from running down further once first condition met

//Examples:
var val = 3;

switch (val) {
  case 1 :
    return "alpha";
    break;
  case 2 :
    return "beta";
    break;
  case 3 :
    return "gamma";
  case 4 :
    return "delta";
}
//will return "gamma"

// ----------------------------------------
// ----------------------------------------
var myTest = 5;

function myTest(val) {
  var answer = "";
  switch(val) {
    case 1 :
    case 2 :
    case 3 :
      return "Low";
    case 4 :
    case 5 :
    case 6 :
      return "Mid";
    case 7 :
    case 8 :
    case 9 :
      return "High";
  }

// will reutrn "Mid"


switch (val) {
  case "bob" :
    return "Marley";
    break;
  case 42 :
    return "The Answer";
    break;
  case 1:
    return "There is no #1";
    break;
  case 99 :
    return "Missed me by this much!";
    break;
  case 7:
    return "Ate Nine";
    break;
}
