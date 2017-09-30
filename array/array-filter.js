var people = [
    { name: "Rose", job: "surgeon" },
    { name: "Michael", job: "reporter" },
    { name: "Bill", job: "surgeon" },
    { name: "Anna", job: "realtor" },
    { name: "Beth", job: "designer" },
    { name: "Adam", job: "surgeon" }
];

// filter surgeons using for loop:

var surgeons = [];
for (i = 0; i < people.length; i++) {
    if (people[i].name === 'surgeon') {
        surgeons.push[i];
    } else {
        console.log('No match')
    }
}


// filter surgeons using filter funciton:

var surgeons = people.filter(function(person){
    return person.job === 'surgeon'
})