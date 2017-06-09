// Objects, Properties, Methods

var person = ("Serhii");
person.length // person is objectname, length is propertyname
person.toUppercase(); //object and method

// creating an empty object

var foo = [];

// add values to the array using push method
var foo = [];
foo.push("bar");
foo.push(100);
// foo = ["bar", 100];


// ----------------------------------------------------
// this is an object
var person = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 40,
  "height": 180
}

// To access object properties:

// dot notation
var newPerson = person.firstname;

// bracket notation (in case property has a space)
var newPerson = person["first name"];
// ----------------------------------------------------



// OBJECT CONSTRUCTOR
// how object conctructor works
// instead of creating objects from scratch, we can use object constructor

var person = function(firstname, lastname, age, height) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.height = height;
}

// now we create an object using the constructor above

myFriend = new person("Mark", "Goldberg", 45, 175); // new person takes person from the constructor above

myGirlfriend = new person ("Jessica", "Alba", 34, 169); // just another example

document.write(myFriend.firstname); //Mark
document.write(myGirlfriend.age); //34
document.write(myFriend.firstname + " and " + myGirlfriend.firstname + " are not going to have sex!"); //Mark and Jessica are not goint to have sex!
