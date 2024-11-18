// =================== Basic Promise Example ===================
function basicPromiseExample() {
  const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });

  simplePromise.then(result => console.log(result));
}

// =================== Promise Chain Example ===================
function chainPromiseExample() {
  const chainPromise = new Promise((resolve, reject) => {
    resolve(1);
  })
    .then(result => result * 2)
    .then(result => result + 3)
    .then(result => console.log('Chain result:', result));
}

// =================== Promise Error Handling ===================
function errorPromiseExample() {
  const errorPromise = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong!'));
  })
    .catch(error => console.error('Caught error:', error.message));
}

// =================== Promise.all Example ===================
function promiseAllExample() {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
  const promise3 = Promise.resolve(42);

  Promise.all([promise1, promise2, promise3])
    .then(values => console.log('All promises resolved:', values));
}

// =================== Promise.race Example ===================
function promiseRaceExample() {
  const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 2000));
  const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 1000));

  Promise.race([slow, fast])
    .then(result => console.log('Race winner:', result));
}

// =================== Custom Promise Implementation ===================
function customPromiseExample() {
  class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.callbacks = [];

      const resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
        }
      };
    }
  }
}
// =================== Basic Promise Example ===================
function basicPromiseExample() {
  const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });

  simplePromise.then(result => console.log(result));
}

// =================== Promise Chain Example ===================
function promiseChainExample() {
  const chainPromise = new Promise((resolve, reject) => {
    resolve(1);
  })
    .then(result => result * 2)
    .then(result => result + 3)
    .then(result => console.log('Chain result:', result));
}

// =================== Promise Error Handling ===================
function errorPromiseExample() {
  const errorPromise = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong!'));
  })
    .catch(error => console.error('Caught error:', error.message));
}

// =================== Promise.all Example ===================
function promiseAllExample() {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
  const promise3 = Promise.resolve(42);

  Promise.all([promise1, promise2, promise3])
    .then(values => console.log('All promises resolved:', values));
}

// =================== Promise.race Example ===================
function promiseRaceExample() {
  const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 2000));
  const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 1000));

  Promise.race([slow, fast])
    .then(result => console.log('Race winner:', result));
}

// =================== Custom Promise Implementation ===================
function customPromiseExample() {
  class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.callbacks = [];

      const resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.callbacks.forEach(callback => callback(value));
        }
      };

      executor(resolve);
    }

    then(onFulfilled) {
      if (this.state === 'fulfilled') {
        onFulfilled(this.value);
      } else {
        this.callbacks.push(onFulfilled);
      }
      return this;
    }
  }

  const customPromise = new MyPromise((resolve) => {
    setTimeout(() => {
      resolve('Custom promise resolved!');
    }, 1000);
  });

  customPromise.then(result => console.log(result));
}

// =================== Async/Await Example ===================
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

// =================== Promise.allSettled Example ===================
function promiseAllSettledExample() {
  const promises = [
    Promise.resolve(1),
    Promise.reject('error'),
    new Promise(resolve => setTimeout(() => resolve('delayed'), 1000))
  ];

  Promise.allSettled(promises)
    .then(results => {
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          console.log('Fulfilled:', result.value);
        } else {
          console.log('Rejected:', result.reason);
        }
      });
    });
}

// =================== Real-world Promise Example ===================
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

function loadImageExample() {
  loadImage('https://example.com/image.jpg')
    .then(img => document.body.appendChild(img))
    .catch(error => console.error(error));
}

// =================== Promise Timeout Wrapper ===================
function withTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

function timeoutExample() {
  const slowOperation = new Promise(resolve => setTimeout(() => resolve('Done!'), 5000));
  withTimeout(slowOperation, 3000)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
}
