//roundes to the nearest integer
Math.roound(4.7); //5

// returns the largest integer less than or equal to a given number.
Math.floor(4.2); // 5

// random number between 0 and 9
Math.floor( Math.random() * 10 );

// random number between min and max
function randomRange(myMin, myMax) {

  return Math.floor( Math.random() * ( myMax - myMin +1 )) + myMin; // Change this line

}

var myRandom = randomRange(5, 15);
