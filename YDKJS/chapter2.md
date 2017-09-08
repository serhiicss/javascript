## You Don't Know JS: Up & Going
### Chapter 2: Into JavaScript

#### Objects
`object` - holds values with properties

`array` and `function` are `object`

>When you use a primitive value like "hello world" as an object by referencing a property or method (e.g., a.toUpperCase()), JS automatically "boxes" the value to its object wrapper counterpart (hidden under the covers).

---

#### Comparing Values
##### Coercion

>Coercion comes in two forms in JavaScript: explicit and implicit. Explicit coercion is simply that you can see obviously from the code that a conversion from one type to another will occur, whereas implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation.

explicit coercion:

```
var a = "42";

var b = Number( a );

a;				// "42"
b;				// 42 -- the number!
```

implicit coercion:

```
var a = "42";

var b = a * 1;	// "42" implicitly coerced to 42 here

a;				// "42"
b;				// 42 -- the number!
```

##### Truthy & Falsy

**falsy:**

* "" (empty string)  
* 0, -0, NaN (invalid number)  
* null, undefined  
* false

**truthy:**

* "hello"  
* 42  
* true  
* [ ], [ 1, "2", 3 ] (arrays)  
* { }, { a: 42 } (objects)  
*function foo() { .. } (functions)

##### Equality

`==` checks for value equality with coercion allowed, and `===` checks for value equality without allowing coercion; `===` is often called "strict equality" for this reason.

```
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
```

* If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.  
* If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.  
* In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

##### Inequality

```
var a = 41;
var b = "42";
var c = "43";

a < b;		// true
b < c;		// true
```

Values compared alphabetically if both are strings. 

Values compared numerically if one or both not strings, then both values are coerced to be `number`.