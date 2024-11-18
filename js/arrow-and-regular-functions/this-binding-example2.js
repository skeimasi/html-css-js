
const person = {
  name: 'John',
  age: 30,
  // Regular function - 'this' binds to the object
  regularGreet: function() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    
    // Inner regular function loses 'this' context
    setTimeout(function() {
      console.log(`Regular: After 1 second, I am still ${this?.name || 'undefined'}`);
    }, 1000);
    
    // Inner arrow function preserves 'this' context
    setTimeout(() => {
      console.log(`Arrow: After 1 second, I am still ${this.name}`);
    }, 1000);
  },
  
  // Arrow function - 'this' is lexically scoped (inherits from parent scope)
  arrowGreet: () => {
    console.log(`Arrow function: My name is ${this?.name || 'undefined'}`);
  }
};

// Regular function works as expected
person.regularGreet();

// Arrow function doesn't bind 'this' to person object
person.arrowGreet();

// Example with class
class User {
  constructor(name) {
    this.name = name;
  }
  
  // Regular method
  regularMethod() {
    return `Regular: Hello ${this.name}!`;
  }
  
  // Arrow method
  arrowMethod = () => {
    return `Arrow: Hello ${this.name}!`;
  }
}

const user = new User('Alice');
console.log(user.regularMethod()); // Works correctly
console.log(user.arrowMethod());   // Works correctly
