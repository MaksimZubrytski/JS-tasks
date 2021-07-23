/* Task 1 */
function rememberResult(initialValue) {
  let savedValue = initialValue;
  return function (callback) {
    savedValue = callback(savedValue);
    return savedValue;
  };
}

// Expected result
function doubleValue(value) {
  return 2 * value;
}

const callWithRememberedResult = rememberResult(2);
console.log(callWithRememberedResult(doubleValue)); // => 4
console.log(callWithRememberedResult(doubleValue)); // => 8
console.log(callWithRememberedResult(doubleValue)); // => 16
