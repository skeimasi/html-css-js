[< Back to Previous Page](Javascript.md)

### Var vs Let vs Const

Variables declared with `var` are function-scoped or globally-scoped, while `let` and `const` are block-scoped. `const` creates constants that cannot be reassigned.

```js
var example - function scoped
function example() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}

// let example - block scoped
function example() {
    let x = 1;
    if (true) {
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}

// const example
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable
```