/* Task 1 */
function summ(...args) {
  if (args.length === 0) {
    return console.error('arguments is undefined');
  }

  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'number') {
      sum += args[i];
    } else if (typeof args[i] === 'string' && !Number.isNaN(+args[i])) {
      sum += +args[i];
    }
  }

  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

/* Task 2 */
function summAdvanced(...args) {
  if (args.length === 0) {
    return console.error('arguments is undefined');
  }

  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'function' && !Number.isNaN(+args[i]())) {
      sum += +args[i]();
    } else if (typeof args[i] === 'string' && !Number.isNaN(+args[i])) {
      sum += +args[i];
    } else if (typeof args[i] === 'number') {
      sum += args[i];
    }
  }

  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

/* Task 2 */
function isValueExists(value) {
  if (value === null || typeof value === 'undefined') {
    return false;
  }

  return true;
}

/* Task 4 */
function callWithFunctionResult(funct1, funct2) {
  if (typeof funct1 === 'function' && typeof funct2 === 'function') {
    return funct1(funct2());
  }
  return undefined;
}

/* Task 5 */
function callWhileStringIsNotEmpty(string, func) {
  if (
    typeof string !== 'string' ||
    typeof func === 'undefined' ||
    func == null
  ) {
    return undefined;
  }

  const temp = string;

  if (string.length === 1) {
    return func(temp);
  }

  func(temp);

  return callWhileStringIsNotEmpty(temp.slice(0, -1), func);
}

module.exports = {
  summ,
  summAdvanced,
  isValueExists,
  callWithFunctionResult,
  callWhileStringIsNotEmpty,
};
