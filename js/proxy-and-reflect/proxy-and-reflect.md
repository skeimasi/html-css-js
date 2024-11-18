### 9. Proxy and Reflect

Proxy allows custom behavior for fundamental operations. Reflect provides methods for interceptable JavaScript operations.

```js
const handler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : "Property not found";
  },
  set: function (target, prop, value) {
    if (prop === "age" && value < 0) {
      throw new Error("Age cannot be negative");
    }
    target[prop] = value;
    return true;
  },
};

const person = new Proxy({}, handler);
person.name = "John";
console.log(person.name); // 'John'
console.log(person.age); // 'Property not found'
```