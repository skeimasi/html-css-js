### 10. Prototype

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const dog = new Dog("Rex");
dog.speak(); // "Rex makes a sound."
dog.bark(); // "Woof!"
```
