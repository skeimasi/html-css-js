### 8. Reference Copy vs Value Copy

Primitive types are copied by value, while objects are copied by reference.

```js
// Value copy (primitives)
let a = 5;
let b = a;
b = 10;
console.log(a); // 5
console.log(b); // 10

// Reference copy (objects)
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // 'Jane'
console.log(obj2.name); // 'Jane'
```