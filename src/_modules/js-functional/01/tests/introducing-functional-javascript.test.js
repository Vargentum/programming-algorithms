'use strict';
import {nth} from '../introducing-functional-javascript';

describe('nth', function() {
  const letters = ['a','b','c']

  it('Should return item attached with index from array or string', () => {
    expect(nth(letters,1)).toBe('b')
    expect(nth(letters.join(''), 1)).toBe('b')
  });

  it('Should fail with incorrect data', () => {
    // expect(nth({}, 2)).toThrow()
    // expect(nth(letters, -1)).toThrow()
    // expect(nth(letters, 55)).toThrow()
    // expect(nth(letters, {})).toThrow()
  })
});
