# Problem:
1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
<br>
Test Data :
<br>
console.log(is_array('w3resource')); 
<br>
console.log(is_array([1, 2, 4, 0]));
<br>
false
<br>
true
<br>
## Solution:
<br>
```
var is_array = function(value) {
    return Array.isArray(value);
}
```
