//=== 1.) move the zeros in an array to the end.
// my solution
var moveZeros = function(arr) {
  let count = 0;
  const myArray = arr.reduce((accum, curr) => {
    if (curr === 0) {
      count++;
      return accum;
    } else {
      accum.push(curr);
      return accum;
    }
  }, []);
  for (let i = 0; i < count; i++) {
    myArray.push(0);
  }
  return myArray;
};

/*
  - You cannot push to the accum and return the accum in the same statement;
*/

// interesting solutions -- filter + concat
var moveZeros = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};

//
var moveZeros = function(arr) {
  var filtedList = arr.filter(function(num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function(num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};
