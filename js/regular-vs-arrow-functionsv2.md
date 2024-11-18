// Regular Functions vs Arrow Functions

// 1. Syntax
function regular() { return "regular" }
const arrow = () => "arrow"

// 2. 'this' binding
const obj = {
  name: "John",
  regularMethod: function() { console.log(this.name) }, // 'this' refers to obj
  arrowMethod: () => { console.log(this.name) }         // 'this' refers to outer scope
}

// 3. Arguments object
function regularArgs() { return arguments }
const arrowArgs = () => arguments // Error: arguments not defined

// 4. Constructor
function RegularConstructor() { this.value = 42 }
const ArrowConstructor = () => { this.value = 42 } // Cannot be used as constructor

// 5. Method shorthand
const methods = {
  regular() { return "regular" },        // Shorter syntax for object methods
  arrow: () => { return "arrow" }        // Not recommended for object methods
}

// 6. Multiple parameters
function regularParams(x, y) { return x + y }
const arrowParams = (x, y) => x + y

// 7. Single parameter
function regularOne(x) { return x * 2 }
const arrowOne = x => x * 2  // Parentheses optional with single parameter

// 8. Return object
function regularObj() { return { key: "value" } }
const arrowObj = () => ({ key: "value" }) // Parentheses required for object literal

// 9. Hoisting
console.log(regularHoist()) // Works
function regularHoist() { return "hoisted" }

console.log(arrowHoist)    // Error
const arrowHoist = () => "not hoisted"

// 10. Line breaks
function regular() {
  return "multiple lines"
}
const arrow = () =>
  "multiple lines"         // No curly braces needed for single expression
