/**
 * @param {string} word
 * @returns {Array<string>} an array of words
  **/
export function splitCamelCase(word) {
  return word
    .split(/ |\B(?=[A-Z])/)
}

