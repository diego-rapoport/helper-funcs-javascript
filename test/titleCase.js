import assert from 'node:assert'
import {describe, it} from 'node:test'

import {toTitleCase} from "../funcs/toTitleCase.js";

describe('toTitleCase function', () => {
  it('should return title case', () => {
    assert.strictEqual(toTitleCase('allsmall'),'Allsmall')
    assert.strictEqual(toTitleCase('ALLCAPS'),'Allcaps')
    assert.strictEqual(toTitleCase('iNVERTED'),'Inverted')
    assert.strictEqual(toTitleCase('AllsCRaMblED'),'Allscrambled')
  })
})
