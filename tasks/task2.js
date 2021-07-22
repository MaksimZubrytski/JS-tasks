/* Task 1 */
function chunk(array, number) {
  if (array === null || array.length === 0) {
    return [];
  }

  const result = [];

  const numberOfIteration = Math.ceil(array.length / number);
  let temp = 0;
  for (let i = 0; i < numberOfIteration; i += 1) {
    result.push(array.slice(temp, temp + number));
    temp += number;
  }

  return result;
}

/* Task 2 */
function difference(array1, array2) {
  if (
    array1 === null ||
    array2 === null ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    return [];
  }

  return array1.concat(array2).reduce((acc, el) => {
    if (array1.includes(el) && array2.includes(el)) {
      return acc;
    }
    acc.push(el);
    return acc;
  }, []);
}

/* Task 3 */
/*
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
*/

function findIndex(array, requiredElement) {
  if (array === null || array.length === 0) {
    return false;
  }

  if (typeof requiredElement === 'function') {
    return array.findIndex(requiredElement);
  }

  return array.indexOf(requiredElement);
}

/* Task 4 */
/*
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
*/
function flattenDeep(array) {
  if (array === null || array.length === 0) {
    return [];
  }

  return array.flat(Infinity);
}

/* Task 5 */
function fromPairs(array) {
  if (array === null || array.length === 0) {
    return {};
  }

  return array.reduce((acc, el) => {
    const [key, value] = el;
    acc[key] = value;
    return acc;
  }, {});
}

/* Task 6 */
/*
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
*/
function uniq(array) {
  if (array === null || array.length === 0) {
    return [];
  }

  return [...new Set(array)];
}

/* Task 7 */
/*
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
*/
function every(array, condition) {
  if (array === null || array.length === 0 || condition === null) {
    return false;
  }

  return array.every(condition);
}

/* Task 8 */
/*
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
*/
function find(array, condition) {
  if (array === null || array.length === 0 || condition === null) {
    return null;
  }

  return array.find(condition);
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
function isEqual(elem1, elem2) {
  if (elem1 === elem2) {
    return true;
  }

  if (
    elem1 === null ||
    elem2 === null ||
    typeof elem1 !== 'object' ||
    typeof elem2 !== 'object'
  ) {
    return false;
  }

  const elem1Keys = Object.keys(elem1);
  const elem2Keys = Object.keys(elem2);

  if (elem1Keys.length !== elem2Keys.length) {
    return false;
  }

  for (let i = 0; i < elem1Keys.length; i += 1) {
    if (!elem2Keys.includes(elem1Keys[i])) {
      return false;
    }
    if (
      typeof elem1[elem1Keys[i]] !== 'object' &&
      typeof elem2[elem1Keys[i]] !== 'object' &&
      elem1[elem1Keys[i]] !== elem2[elem1Keys[i]]
    ) {
      return false;
    }
    if (
      typeof elem1[elem1Keys[i]] === 'object' &&
      typeof elem2[elem1Keys[i]] === 'object' &&
      !isEqual(elem1[elem1Keys[i]], elem2[elem1Keys[i]])
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
