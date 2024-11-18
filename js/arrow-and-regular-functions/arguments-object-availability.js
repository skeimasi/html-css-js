// 2. Arguments object availability
function regularFunction() {
  console.log("Regular function arguments:", arguments);
}

const arrowFunction = () => {
  // This will throw an error because arguments is not defined
  console.log("Arrow function arguments:", arguments);
};
