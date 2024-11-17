[< Back to Previous Page](Javascript.md)

### Deep copy vs Shallow copy

Deep copying creates a completely independent copy of an object and its nested properties.

```js
// Using JSON (limitations with functions and special objects)
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// Using structured clone (modern method)
const clone = structuredClone(originalObject);

// Custom recursive function
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}
```