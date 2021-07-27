/* Task 1 */
function createObject(obj) {
  const keys = Object.keys(obj);

  keys.forEach(key => {
    if (typeof obj[key] === 'function') {
      obj[key] = obj[key].bind(obj);
    }
  });

  return obj;
}

// Expected result
const obj1 = {
  testField: 1,
  getTestField() {
    return this.testField;
  },
};
const getTestField1 = obj1.getTestField;
console.log(getTestField1()); // => undefined, context was lost

const obj2 = createObject({
  testField: 1,
  getTestField() {
    console.log(this);
    return this.testField;
  },
});

const getTestField2 = obj2.getTestField;
console.log(getTestField2()); // => 1, context was binded by createObject function
