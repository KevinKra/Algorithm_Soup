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
  var filteredList = arr.filter(function(num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function(num) {
    return num === 0;
  });
  return filteredList.concat(zeroList);
};

//=== 2.) Narcissistic value, each number is raised by the length of the total number and added together.
// my solution
function narcissistic(value) {
  //split value
  const values = value
    .toString()
    .split("")
    .map(Number);
  //raise each value by the length of array
  //add the values together
  const solution = values
    .map(value => Math.pow(value, values.length))
    .reduce((total, curr) => {
      total += curr;
      return total;
    }, 0);
  //compare added values to input value
  if (value === solution) return true;
  else return false;
}

//=== 3.) First non-repeating character
// my solution
const firstNonRepeatingLetter = s => {
  const index = s
    .toLowerCase()
    .split("")
    .findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char));

  return index === -1 ? "" : s[index];
};

// regex
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}

//=== 4.) Human Readable Time
//my solution
function humanReadable(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const array = [h, m, s];

  const formatted = array.map(function(value) {
    if (value.toString().length < 2) {
      return "0" + value.toString();
    } else {
      return value;
    }
  });

  return `${formatted[0]}:${formatted[1]}:${formatted[2]}`;
}

//map joining
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function(v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

//adv closure solution
function humanReadable(seconds) {
  var pad = function(x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}
