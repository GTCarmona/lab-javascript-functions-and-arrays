function maxOfTwoNumbers(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Finding Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(array) {
  let ans = array[0];
  if (array.length === 0) {
    return null;
  }
  for (let i = 1; i < array.length; i++) {
    if (ans.length < array[i].length) {
      ans = array[i];
    }
  }
  return ans;
}

// Calculating a Sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array) {
  let sum = 0;
  if (array.length === 0) {
    return sum;
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Calculate the Average

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum = 0;
  let result = 0;
  if (array.length === 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  result = sum / array.length;
  return result;
}

// Array of Strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function averageWordLength(array) {
  let wordLength = [];
  let sum = 0;
  let avg = 0;
  if (array.length === 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      wordLength.push(array[i].length);
    }
    for (let i = 0; i < wordLength.length; i++) {
      sum += wordLength[i];
    }
    avg = sum / wordLength.length;
    return avg;
  }
}

// Unique Arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

function uniquifyArray(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (array.indexOf(array[i], i + 1) !== -1) {
      array.splice(array.indexOf(array[i], i + 1), 1);
      i--;
    }
  }
  return array;
}

// Finding Elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      return true;
    }
  }
  return false;
}

// Counting Repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(array, word) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      count += 1;
    }
  }
  return count;
}
