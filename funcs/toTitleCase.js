/** 
 * Takes a word and turns into title case.
 * @param {string} a word
 * @returns {string} another word
 **/
export function toTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
