// source: https://www.freecodecamp.com/challenges/profile-lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "like": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  

for (var i = 0; i < contacts.length; i++){ //iterate trough the array
    if (contacts[i].firstName === firstName) { //  firstName argument matches firstName property and is now contacts[i] ( or contacts[0] - first array )
        if (contacts[i].hasOwnProperty(prop)) { // contacts[i] is now checked prop argument to see if the array has that property
            return contacts[i][prop]; // returns values for the given property
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}

lookUpProfile("Akira", "likes");
