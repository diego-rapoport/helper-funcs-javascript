import assert from 'node:assert';
import { describe, it } from "node:test";
import { removeDiacritics } from '../funcs/removeDiacritics.js';

describe('removeDiacritics', () => {
  it('removes diacritics from a string', () => {
    assert(removeDiacritics('Olá, como você está?'), 'Ola, como voce esta?');
  });

  it('does not modify strings without diacritics', () => {
    assert(removeDiacritics('Hello, world!'), 'Hello, world!');
  });

  it('removes diacritics from uppercase letters', () => {
    assert(removeDiacritics('ÁÉÍÓÚ'), 'AEIOU');
  });

  it('handles empty strings', () => {
    assert.strictEqual(removeDiacritics(''), '');
  });

  it('removes diacritics from a string with mixed characters', () => {
    assert(removeDiacritics('çağşıñ'), 'cagsin');
  });

  it('removes diacritics correctly with special characters', () => {
    assert(removeDiacritics('¿Cómo estás?'), 'Como estas?');
  });

  it('does not alter symbols or numbers', () => {
    assert(removeDiacritics('¡123 #$@'), '¡123 #$@');
  });
});

