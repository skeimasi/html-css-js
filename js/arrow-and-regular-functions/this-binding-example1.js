// 1. 'this' binding differences
const obj = {
  name: "Test Object",
  regularMethod: function () {
    console.log("Regular function this:", this.name);
  },
  arrowMethod: () => {
    console.log("Arrow function this:", this.name);
  },
};

obj.regularMethod(); // Output: "Regular function this: Test Object"
obj.arrowMethod(); // Output: "Arrow function this: undefined"
