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

// Expected result
console.log(summ(1, '2', '3', 5, 'abc', true, false, false, true)); // => Number 11, 'abc' was ignored

/* Task 2 */
function summAdvanced(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] === 'function') {
      sum += +args[i]();
    } else if (Number(args[i])) {
      sum += +args[i];
    }
  }

  return sum;
  // HINT: pseudo-array `arguments` should be used (https://learn.javascript.ru/arguments-pseudoarray)
}

// Expected result
// If function(getTen, getTenString, getRandomNumber) was passed it should be called and its return value should be added to final result

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return '10';
}

summAdvanced('abc', 1, '2', getTen, getTenString, getRandomNumber); // => 1 + 2 + 10 + 10 + randow value, 'abc' should be ignored. Result should have type Number

function isValueExists(value) {
  if (value === null || typeof value === 'undefined') {
    return false;
  }
  return true;
}

// Expected result
isValueExists(1); // => true
isValueExists(0); // => true
isValueExists('12'); // => true
isValueExists(''); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false

/* Task 4 */
function callWithFunctionResult(funct1, funct2) {
  return funct1(funct2());
}

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

// Expected result
callWithFunctionResult(doubleValue, getFour); // => doubleValue was called with value returned by getFour, => 2 * 4 = 8

/* Task 5 */
function callWhileStringIsNotEmpty(string, func) {
  let temp = string;
  for (let i = 0; i < string.length; i += 1) {
    if (temp.length > 1) {
      func(temp);
      temp = temp.slice(0, -1);
    }
  }
  return func(temp);
}
// Expected result
function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty('qwerty', consoleLog);
/* Result:
      qwerty
      qwert
      qwer
      qwe
      qw
      q
    */
