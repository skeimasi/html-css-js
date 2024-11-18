[< Back to Previous Page](Javascript.md)

### Spread Operator vs Rest Operator and Use Cases

Spread (...) expands elements, while rest collects elements into an array.
The spread operator (...) and rest operator (...) look identical but serve different purposes:

#### Spread Operator
- Used to expand elements
- Common use cases:
  - Array literals: Combine or copy arrays
  - Object literals: Merge objects
  - Function calls: Pass array elements as separate arguments
  - Shallow copying: Create copies of arrays/objects

#### Rest Operator
- Used to collect multiple elements into an array
- Common use cases:
  - Function parameters: Handle variable number of arguments
  - Array destructuring: Collect remaining elements
  - Object destructuring: Gather remaining properties

Examples:


```js
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 }; // { x: 1, y: 2, z: 3 }

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


// Array destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Object destructuring with rest
const { title, ...details } = {
  title: 'JavaScript',
  author: 'John Doe',
  year: 2023,
  pages: 200
};
console.log(title);    // 'JavaScript'
console.log(details);  // { author: 'John Doe', year: 2023, pages: 200 }

// Spread operator in function calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // 3

// Combining arrays with spread
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];
const food = [...fruits, ...vegetables];
console.log(food);  // ['apple', 'banana', 'carrot', 'tomato']

// Merging objects with spread
const defaultSettings = { theme: 'light', fontSize: 12 };
const userSettings = { fontSize: 16, showSidebar: true };
const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);  // { theme: 'light', fontSize: 16, showSidebar: true }

// Rest parameters in function with additional parameters
function printUserData(userId, ...userInfo) {
  console.log('User ID:', userId);
  console.log('Additional Info:', userInfo);
}
printUserData(123, 'John', 'Doe', 30);  // User ID: 123
                                       // Additional Info: ['John', 'Doe', 30]


```