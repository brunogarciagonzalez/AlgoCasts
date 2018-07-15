// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // if neg stay neg
  let negBool = n < 0;
  if (negBool) {
    return (
      -1 *
      parseInt(
        n
          .toString()
          .split("-")[1]
          .split("")
          .reverse()
          .join("")
      )
    );
  } else {
    return parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  }
}

module.exports = reverseInt;
