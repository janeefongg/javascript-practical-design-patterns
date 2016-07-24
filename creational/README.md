##Constructor
- Use to create new objects with their own object scope
- Uses the 'new' keyword

What is does..

1. Creates brand new object
2. Links to an object prototype
3. Binds 'this' to the new object scope
4. Implicitly returns 'this'

```
function ObjectName (param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString() = function () {
    return this.param1 + ' ' + this.param2;
  }
}
```


##Module
- Simple way to encapsulate methods
- Creates a 'toolbox' of functions
- Ex: service for HTTP calls or DB calls
- Object literal wrapped in a function
    - Create private variables

```
var Module = {
  var privateVar = 'I am private...';
  return {
    method: function () {...},
    nextMethod: function () {...}
  }
}
```

##Factory
- Pattern used to simplify object creation (abstraction)
- Creating different objects based on need
- Repository creation