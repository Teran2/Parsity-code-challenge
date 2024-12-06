const findSum = function(array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
};

const findFrequency = function(array) {
  const items = array.join('').toLowerCase().match(/[a-z]/g);
  const frequencyCounter = {};

  items.forEach(item => {
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
  });

  let mostFrequentItem = '';
  for (const item of Object.keys(frequencyCounter)) {
    if (frequencyCounter[item] > (frequencyCounter[mostFrequentItem] || 0)) {
      mostFrequentItem = item;
    }
  }

  let leastFrequentItem = '';
  for (const item of Object.keys(frequencyCounter)) {
    if (frequencyCounter[item] < (frequencyCounter[leastFrequentItem] || Infinity)) {
      leastFrequentItem = item;
    }
  }

  return { most: mostFrequentItem, least: leastFrequentItem };
}

const isPalindrome = function (str) {
  const word = String(str).toLowerCase();
  const reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function (array) {
    const products = [];

    for (let i = 0; i < array.length; i++) {
        const product = array[i] * array[i + 1];

        if (product) {
            products.push(product);
        }
    }

    return Math.max(...products);
}

const removeParenth = function(str) {
  const string = str.replace(/\([^)]*\)/g, '');

  return string;
  };

const scoreScrabble = function (str) {
  const letterValues = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10
  };

  const strings = str.toUpperCase();

  let score = 0;

  for (const letter of strings) {
    score = letterValues + letter[strings];
  }

  return score;
};
