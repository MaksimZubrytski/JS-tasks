/* Task 1 */
function rememberResult(initialValue) {
  let savedValue = initialValue;

  return function (callback) {
    savedValue = callback(savedValue);

    return savedValue;
  };
}

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

/* Task 3 */
function partial(callback, appeal) {
  return function (name) {
    return callback(appeal, name);
  };
}

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
/* Task 5 */
// An old hardcore solution :)
/*
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
*/
// New soft solution :)
function debounce(fn, timeOut) {
  if (fn === undefined) {
    return null;
  }

  if (debounce.timerId) {
    clearTimeout(debounce.timerId);
  }

  debounce.timerId = setTimeout(fn, timeOut);
  return debounce.timerId;
}

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

module.exports = {
  rememberResult,
  callMaxTimes,
  partial,
  curry,
  debounce,
  memoize,
};
