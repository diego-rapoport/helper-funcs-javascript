/**
 * @param {Array<string|number|null|boolean>} arr1 first array
 * @param {Array<string|number|null|boolean>} arr2 second array
 * @returns {boolean} true if items inside matches strictly
 **/
export function compareTwoArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => {
    return item === arr2[index]
  })
}

