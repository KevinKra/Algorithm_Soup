let primesArray = [2, 3, 5, 7, 11, 13, 17];

//binary search -- worst case the value is not present in the array
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

//linear search -- worst case the value is not present in the array
const linearSearch = function(array, targetValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      return i;
    }
  }
  return -1;
};
