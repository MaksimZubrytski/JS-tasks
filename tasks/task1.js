/* Task 1 */
function summ(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'number') {
      sum += args[i];
    } else if (typeof args[i] === 'string') {
      if (Number(args[i])) {
        sum += Number(args[i]);
      }
    }
  }

  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

/* Task 2 */
function summAdvanced(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'function') {
      if (Number(args[i]())) {
        sum += Number(args[i]());
      }
    } else if (typeof args[i] === 'string') {
      if (Number(args[i])) {
        sum += Number(args[i]);
      }
    } else if (typeof args[i] === 'number') {
      sum += +args[i];
    }
  }

  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

function isValueExists(value) {
  if (value === null || typeof value === 'undefined') {
    return false;
  }
  return true;
}

/* Task 4 */
function callWithFunctionResult(funct1, funct2) {
  return funct1(funct2());
}

/* Task 5 */
function callWhileStringIsNotEmpty(string, func) {
  if (typeof string !== 'string') {
    return null;
  }
  let temp = string;
  for (let i = 0; i < string.length; i += 1) {
    if (temp.length > 1) {
      func(temp);
      temp = temp.slice(0, -1);
    }
  }
  return func(temp);
}

module.exports = {
  summ,
  summAdvanced,
  isValueExists,
  callWithFunctionResult,
  callWhileStringIsNotEmpty,
};
