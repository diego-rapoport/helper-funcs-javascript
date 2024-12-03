/**
* @param{string} word a word containing diacritics like á
* @returns {string} a string without diacritics
**/
export function removeDiacritics(word) {
  return word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
