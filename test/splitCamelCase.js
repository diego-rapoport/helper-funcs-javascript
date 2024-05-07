import assert from 'node:assert'
import {describe, it} from 'node:test'

import {splitCamelCase} from '../funcs/splitCamelCase.js'
import { compareTwoArrays } from '../funcs/compareTwoArrays.js'

describe('Split camel case strings', () => {
  it('should return an array splitted from camel case string', () => {
    const arrayCompare = ['one', 'First', 'Test']
    const arraysCompared = compareTwoArrays(arrayCompare, splitCamelCase('oneFirstTest'))
    assert.equal(arraysCompared, true)
  })
})
