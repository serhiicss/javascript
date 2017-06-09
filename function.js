function totalSum(a,b) {
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