[< Back to Previous Page](Javascript.md)

### Promises

Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They help manage asynchronous code more elegantly than callbacks.


A Promise is in one of these states:
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed
- **Settled**: The Promise is either fulfilled or rejected

Promises provide methods:
- `.then()`: Handles successful completion
- `.catch()`: Handles errors/rejections
- `.finally()`: Executes code regardless of outcome

Promise Static Methods:
- `Promise.all()`: Waits for all promises to resolve
- `Promise.race()`: Resolves/rejects as soon as one promise settles
- `Promise.allSettled()`: Waits for all promises to settle
- `Promise.any()`: Resolves when any promise fulfills
- `Promise.resolve()`: Returns a resolved promise
- `Promise.reject()`: Returns a rejected promise

Chaining promises allows you to perform sequential asynchronous operations where each subsequent operation starts when the previous operation succeeds. This creates a promise chain that helps avoid callback hell and makes asynchronous code more readable and maintainable.

Error handling in promises can be done either through the .catch() method at the end of a chain or through try/catch blocks when using async/await syntax. This provides a more structured way to handle errors in asynchronous operations.


**Example:**
```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    resolve(data);
    // reject('Error fetching data');
  }, 2000);
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```
```js
// Modern async/await syntax
async function getData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
```js
// Promise.all() example
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = fetch('https://api.example.com/data');

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(error => console.error(error));
```
```js
// Promise.race() example
const promise4 = new Promise(resolve => setTimeout(() => resolve('fast'), 1000));
const promise5 = new Promise(resolve => setTimeout(() => resolve('slow'), 3000));

Promise.race([promise4, promise5])
  .then(result => console.log(result)) // Will log 'fast'
  .catch(error => console.error(error));
```
```js
// Promise chaining example
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: 'Alice' }), 1000);
  });
}

function getUserPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { userId: user.id, post: 'Hello World' },
      { userId: user.id, post: 'Promise chaining is cool' }
    ]), 1000);
  });
}
```
```js
// Using promise chaining
getUser(1)
  .then(user => getUserPosts(user))
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

```
```js
// Using async/await with Promise.allSettled()
async function fetchMultipleUrls() {
  const urls = [
    'https://api.example.com/1',
    'https://api.example.com/2',
    'https://api.example.com/3'
  ];
  
  const promises = urls.map(url => fetch(url));
  
  try {
    const results = await Promise.allSettled(promises);
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Error:', result.reason);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
```
```js
// Promise.any() example
async function fetchFirstSuccess() {
  const promises = [
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Fail 1')), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Success 1'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Success 2'), 3000))
  ];

  try {
    const result = await Promise.any(promises);
    console.log('First success:', result); // Will log 'Success 1'
  } catch (error) {
    console.error('All promises failed:', error);
  }
}
```
```js
// Custom Promise implementation
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```
```js
// Custom Promise with retry mechanism
function fetchWithRetry(url, retries = 3) {
  return new Promise((resolve, reject) => {
    const attempt = (retriesLeft) => {
      fetch(url)
        .then(resolve)
        .catch((error) => {
          if (retriesLeft === 0) {
            reject(error);
          } else {
            console.log(`Retrying... ${retriesLeft} attempts left`);
            setTimeout(() => attempt(retriesLeft - 1), 1000);
          }
        });
    };
    attempt(retries);
  });
}
```
```js
// Custom Promise that times out
function promiseWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}
```
```js
// Example usage of custom promises
async function demonstrateCustomPromises() {
  // Using delay
  console.log('Starting...');
  await delay(2000);
  console.log('After 2 seconds');

```
```js
  // Using fetchWithRetry
  try {
    const response = await fetchWithRetry('https://api.example.com/data');
    console.log('Data fetched successfully');
  } catch (error) {
    console.error('Failed after all retries:', error);
  }
```
```js
  // Using promiseWithTimeout
  try {
    const result = await promiseWithTimeout(
      fetch('https://api.example.com/data'),
      5000
    );
    console.log('Operation completed within timeout');
  } catch (error) {
    console.error('Operation failed or timed out:', error);
  }
}
```