// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(string) {
  let outputMap = {};

  for (char of string) {
    if (!outputMap[char]) {
      outputMap[char] = 1;
    } else {
      outputMap[char] += 1;
    }
  }

  return outputMap;
}

function anagrams(stringA, stringB) {
  // .replace(/[^\w]/g, "").toLowerCase()
  let moddedA = stringA.replace(/[\W_]/g, "").toLowerCase();
  let moddedB = stringB.replace(/[\W_]/g, "").toLowerCase();
  let charMapA = charMap(moddedA);
  let charMapB = charMap(moddedB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
