[< Back to Previous Page](Javascript.md)

### <font color="yellow">Regular Functions vs Arrow Functions</font>

Arrow functions provide a concise syntax and lexically bind `this`. Regular functions create their own `this` context.\
Regular functions and arrow functions are two ways to define functions in JavaScript, each with distinct characteristics and use cases:

Regular Functions:
- Create their own `this` binding based on how they are called
- Have their own `arguments` object
- Can be used as constructors with the `new` keyword
- Support `function` hoisting
- Have access to `super` and `new.target` keywords
- More verbose syntax but offer greater flexibility

Arrow Functions:
- Inherit `this` from the enclosing scope (lexical scoping)
- Don't have their own `arguments` object
- Cannot be used as constructors (no `new` keyword)
- Always anonymous (though can be assigned to variables)
- Cannot be used for generator functions
- More concise syntax, especially for simple operations
- Ideal for callbacks and methods that need to preserve context

Key Differences:
- Syntax: Arrow functions have shorter syntax for simple operations
- `this` binding: Regular functions create new context, arrow functions inherit
- Constructor usage: Only regular functions can be constructors
- Methods: Regular functions preferred for object methods and prototype methods
- Arguments: Only regular functions have arguments object

```js
// Regular function
function Person(name) {
  this.name = name;
  this.sayHiLater = function () {
    setTimeout(function () {
      console.log("Hi, " + this.name); // this.name is undefined
    }, 1000);
  };
}

// Arrow function
function Person(name) {
  this.name = name;
  this.sayHiLater = function () {
    setTimeout(() => {
      console.log("Hi, " + this.name); // works correctly
    }, 1000);
  };
}

// Regular Function Declaration
function add(a, b) {
  return a + b;
}

// Regular Function Expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow Function Expression
const divide = (a, b) => a / b;

// Arrow Function with Multiple Lines
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};

// Regular Function with Arguments Object
function sum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

// Arrow Functions Don't Have Arguments Object
const arrowSum = (...args) => args.reduce((a, b) => a + b, 0);

// Method Definition in Object
const calculator = {
  // Regular method (has its own this)
  multiply: function (x) {
    this.result = x * 2;
  },
  // Arrow method (inherits this from surrounding scope)
  double: (x) => x * 2,
  // Shorthand method
  square(x) {
    return x * x;
  },
};

// Constructor Function (can only use regular function)
function Car(make) {
  this.make = make;
  // Regular function loses 'this' context
  this.startRegular = function () {
    setTimeout(function () {
      console.log("Starting " + this.make); // this.make is undefined
    }, 1000);
  };
  // Arrow function preserves 'this' context
  this.startArrow = function () {
    setTimeout(() => {
      console.log("Starting " + this.make); // works correctly
    }, 1000);
  };
}
```