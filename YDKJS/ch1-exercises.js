var phonePrice = 150;
var accessoryPrice = 10;
var tax = 0.08;

var budget = 500;

if ( phonePrice < budget) {
    phonePrice++;
}

// For somone who wrote a book on JS, the author failed to present a working exerciese right in the beginning of the book series...

(function() {
	var i = 1;

   var foo = function(){
	if (true) {
		var i = 2;
        console.log(i);
    }
}

console.log(i);
})();