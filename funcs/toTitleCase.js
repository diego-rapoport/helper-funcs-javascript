/** 
 * Takes a word and turns into title case.
 * @param {string} word
 * **/
function toTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

module.exports = toTitleCase
