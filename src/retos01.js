let maxNumber = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
let sumaPares = (numberList) => {
  let pairNumbers = 0;

  for (const cadaItem of numberList) {
    if (cadaItem % 2 == 0) {
      pairNumbers += cadaItem;
    }
  }
  return pairNumbers;
};

module.exports = { maxNumber, sumaPares };
