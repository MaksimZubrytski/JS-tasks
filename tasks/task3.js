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
callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16

/* Task 2 */
function callMaxTimes(numberOfTimes, callback) {
  let maximumNumberOfFunctionCalls = numberOfTimes;
  return function () {
    if (maximumNumberOfFunctionCalls === 0) {
      maximumNumberOfFunctionCalls = 0;
    } else {
      callback();
      maximumNumberOfFunctionCalls -= 1;
    }
  };
}

// Expected result
function consoleLog() {
  console.log('abc');
}

const callConsoleLog = callMaxTimes(3, consoleLog);
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => nothing happens

/* Task 3 */
function partial(callback, appeal) {
  return function (name) {
    return callback(appeal, name);
  };
}

// Expected result
function greet(greeting, name) {
  return `${greeting} ${name}`;
}

const sayHelloTo = partial(greet, 'Hello');

console.log(sayHelloTo('everyone')); // => 'Hello everyone'

/* Task 4 */
function curry(fn) {
  const args = [];

  return function addElemInArray(el) {
    args.push(el);

    if (args.length === fn.length) {
      return fn(...args);
    }

    return addElemInArray;
  };
  // HINT: fn.length should be used to get number of fn arguments
}

// Expected result
function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);
console.log(curriedSumm1(1)(2)(3)); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}
const curriedSumm2 = curry(summ2);
curriedSumm2(1)(2)(3)(4)(5); // => 15
