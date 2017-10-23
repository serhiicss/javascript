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
get:  
`object.name` - dot notation  
`object[expression]` bracket notation

set:  
`object.name = value`  
`objecet.[expression] = value`

delete:  
`delete object.name`
`delete object[expression]`

```
var person = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 40,
  "height": 180
}
```