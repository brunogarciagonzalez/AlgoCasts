// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (character of str) {
    // if (charMap[character]){
    //   charMap[character]+=1
    // } else
    // charMap[character]=1

    charMap[character] = charMap[character] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
