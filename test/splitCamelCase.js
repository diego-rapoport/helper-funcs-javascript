import assert from 'node:assert'
import {describe, it} from 'node:test'

import {splitCamelCase} from '../funcs/splitCamelCase.js'

function compareTwoArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => {
    return item === arr2[index]
  })
}
describe('Split camel case strings', () => {
  it('should return an array splitted from camel case string', () => {
    const arrayCompare = ['one', 'First', 'Test']
    const arraysCompared = compareTwoArrays(arrayCompare, splitCamelCase('oneFirstTest'))
    assert.equal(arraysCompared, true)
  })
})
