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
let toOnlyString = (listaMix) => {
  let onlyString = [];
  for (let i = 0; i < listaMix.length; i++) {
    if (typeof listaMix[i] == "string") {
      onlyString.push(listaMix[i]);
    }
  }
  return onlyString;
};

let namesStartWithA = (namesList) => {
  let namesListStartWithA = [];
  for (let i = 0; i < namesList.length; i++) {
    if (namesList[i].charAt(0) == "A") {
      namesListStartWithA.push(namesList[i]);
    }
    if (namesList[i].charAt(0) == "a") {
      namesListStartWithA.push(namesList[i]);
    }
  }
  return namesListStartWithA;
};

module.exports = { maxNumber, sumaPares, toOnlyString, namesStartWithA };
