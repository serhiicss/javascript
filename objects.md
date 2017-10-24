## JavaScript Objects

`[keys]` must be strings. Object key is automatically coerced to string

### Object structure

```
var foo = {
    a: 1,
    b: 2
}
```
`foo` is an object  
`a` and `b` are keys  
`1`, `2`, are values  
`a: 1` and `b: 2` are properties 

### Accessing objects

create:  
`var myObj = new Object();`  
`var myObj = {};`  
`var myObj = {firstname: "Tony", lastname: "Stark"};` 

get:  
`object.name` - dot notation  
`object[expression]` - bracket notation

set:  
`object.name = value`  
`objecet.[expression] = value`

delete:  
`delete object.name`
`delete object[expression]`

#### Examples:

`var person = new Object();` - create new object  
`person.firstname = "John";` - create a **property** with **key** `firstname` and *value* `"John"`  
`person.lastname = "Doe";`    
`person.age = 40;`    
`person.height = 180;`

```
var person = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 40,
  "height": 180
}
```


#### Objects within objects

`person.address = new Object();` - creating a new `object`  
`person.address.street = "100 Main st";` - adding the new object to the existing object of `person`  
`person.address.city = "New York";`  
`person.address.state = "NY";`  
`person.address.zip = 123;`
```
var person = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 40,
  "height": 180,
  "address":
    "street": "100 Main st",
    "city": "New York",
    "state": "NY",
    "zip": 123"
}
```