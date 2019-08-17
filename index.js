let primesArray = [2, 3, 5, 7, 11, 13, 17];

const binarySearch = function(array, targetValue) {
  let min = 0;
  let max = array.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};
