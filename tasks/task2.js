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

// Expected result
difference([2, 1], [2, 3, 4]); // => [1, 3, 4]

function findIndex(array, requiredElement) {
  if (array === null || array.length === 0) {
    return undefined;
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
    }
  }

  return index;
}

// Expected result
const numbers = [3, 5, 1, 6, 7];
console.log(findIndex(numbers, 1)); // => 2

const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];
console.log(findIndex(users, user => user.name === 'User2')); // => 1

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
    return [];
  }
  
  const result = {};

  array.forEach(el => {
    const [key, value] = el;
    result[key] = value;
  });

  return result;
}

module.exports = {
  chunk,
  difference,
  findIndex,
  flattenDeep,
  fromPairs,
};
