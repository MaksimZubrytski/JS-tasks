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
      return null;
    }

    maximumNumberOfFunctionCalls -= 1;

    return callback();
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
sayHelloTo('everyone'); // => 'Hello everyone'

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

function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);

// Expected result
curriedSumm1(1)(2)(3); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);

// Expected result
curriedSumm2(1)(2)(3)(4)(5); // => 15

/* Task 5 */
let debounce = function (fn, timeOut) {
  return setTimeout(fn, timeOut);
};

function dateNow() {
  console.log(Date.now());
}

function CallTracking(fn) {
  let isCalled = false;
  let timerId;
  return function (func, time) {
    if (isCalled) {
      clearTimeout(timerId);
    }

    timerId = fn.call(this, func, time);

    isCalled = true;
  };
}

debounce = CallTracking(debounce);

// Second case
debounce(dateNow, 100); // => canceled
debounce(dateNow, 150); // => canceled
debounce(dateNow, 170); // => would be called only last, previous would be canceled

/* Task 6 */
function memoize(fn) {
  // TODO: implement function body
  const cache = new Map();

  return function (...args) {
    const key = [].join.call(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

// Expected result
function summ(a, b, c) {
  return a + b + c;
}

const memoizedSumm = memoize(summ);

memoizedSumm(1, 2, 3); // => function summ was called, result 6
memoizedSumm(1, 2, 3); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
memoizedSumm(4, 2, 3); // => function summ was called, result 9
memoizedSumm(4, 2, 3); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned
