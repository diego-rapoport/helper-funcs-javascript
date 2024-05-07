import assert from 'node:assert'
import { describe, it } from "node:test";
import { compareTwoArrays } from '../funcs/compareTwoArrays.js';

describe('Comparing two arrays', () => {
  it('should return true comparing two arrays with the same items', () => {
    const array1 = ['one','two','three']
    const array2 = ['one','two','three']
    assert.equal(true, compareTwoArrays(array1, array2))
  })
})
