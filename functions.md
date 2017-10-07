## Functions
---
If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.  
`function foo(){..}` - **Function declaration**.  Identifier `foo` is global.  
`(function foo(){..})();` - **Function expression**. Identifier `foo` is local (bound to itself).  
`(function(){..})();` - **Anonymous function expression**. Identifier `foo` is local (bound to itself).

**Syntax**
```
function name([param,[, param,[..., param]]]) {
   [statements]
}
```

**Crate a function**

```
function addNumbers(a, b) {
    return a + b;
}
```
**or**

```
function addNumbers(a, b) {
    var total =  a + b;
    return total;
}
```

**or**

```
var addNumbers = function(a, b) {
    var total =  a + b;
    return total;
}
```

## Higher order functions

```
var people = [
  { name: 'David', job: 'surgeon' },
  { name: 'Sarah', job: 'driver' },
  { name: 'Mark', job: 'surgeon' },
  { name: 'Sam', job: 'broker' },
  { name: 'Natali', job: 'surgeon' },
  { name: 'Anna', job: 'clerk' }
]

var surgeons = people.filter(function(person) {
    return person.job === 'surgeon'
});
```
**or**

```
var isSurgeon = function(person) {
  return person.job === 'surgeon'
}

var surgeons = people.filter(isSurgeon)
```