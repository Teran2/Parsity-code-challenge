const findSum = function(array) {
    // your code here - don't forget to return a number!
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
  };

