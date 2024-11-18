// 3. Constructor function differences
function RegularConstructor() {
  this.value = 42;
}
const regular = new RegularConstructor(); // Works fine

const ArrowConstructor = () => {
  this.value = 42;
};
// const arrow = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor
