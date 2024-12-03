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

