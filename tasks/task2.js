/* Task 1 */
function chunk(array, number) {
  if (array === null || array.length === 0) {
    return [];
  }

  return [array.slice(0, number), array.slice(number)];
}

/* Task 2 */
function getNonRepeatingElementsInFirstArray(firstArray, secondArray) {
  const resultArray = [];

  firstArray.forEach(el => {
    if (secondArray.indexOf(el) === -1) {
      resultArray.push(el);
    }
  });

  return resultArray;
}

/* Task 3 */
function difference(array1, array2) {
  if (
    array1 === null ||
    array2 === null ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    return [];
  }

  const result = [];

  return result.concat(
    getNonRepeatingElementsInFirstArray(array1, array2),
    getNonRepeatingElementsInFirstArray(array2, array1),
  );
}

/* Task 4 */
function findIndex(array, requiredElement) {
  if (array === null || array.length === 0) {
    return false;
  }

  let index = -1;

  if (typeof requiredElement === 'function') {
    for (let i = 0; i < array.length; i += 1) {
      if (requiredElement(array[i])) {
        index = i;
        break;
      }
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (requiredElement === array[i]) {
      index = i;
      break;
    }
  }

  return index;
}

/* Task 4 */
const isElementArray = elem => Array.isArray(elem);

function flattenDeep(array) {
  if (array === null || array.length === 0) {
    return [];
  }

  if (!array.some(isElementArray)) {
    return array;
  }

  const newArr = array.reduce((acc, el) => acc.concat(el), []);

  return flattenDeep(newArr);
}

/* Task 5 */
function fromPairs(array) {
  if (array === null || array.length === 0) {
    return {};
  }

  const result = {};

  array.forEach(el => {
    const [key, value] = el;
    result[key] = value;
  });

  return result;
}

/* Task 6 */

function uniq(array) {
  if (array === null || array.length === 0) {
    return [];
  }

  const result = [];

  array.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });

  return result;
}

/* Task 7 */
function every(array, condition) {
  if (array === null || array.length === 0 || condition === null) {
    return false;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (!condition(array[i])) {
      return false;
    }
  }

  return true;
}

/* Task 8 */
function find(array, condition) {
  if (array === null || array.length === 0 || condition === null) {
    return null;
  }

  let result;

  for (let i = 0; i < array.length; i += 1) {
    if (condition(array[i])) {
      result = array[i];
      break;
    }
  }

  return result;
}

/* Task 9 */
function groupBy(array, condition) {
  if (array === null || array.length === 0 || condition === null) {
    return {};
  }

  return array.reduce((acc, el) => {
    if (!acc[condition(el)]) {
      acc[condition(el)] = [];
    }

    acc[condition(el)].push(el);

    return acc;
  }, {});
}

/* Task 10 */
function isEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1Keys.length; i += 1) {
    if (
      !obj2Keys.includes(obj1Keys[i]) ||
      !isEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]])
    ) {
      return false;
    }
  }

  return true;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
  uniq,
  every,
  find,
  groupBy,
  isEqual,
};
