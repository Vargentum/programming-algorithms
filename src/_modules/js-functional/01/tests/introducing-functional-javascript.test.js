import _ from "lodash"
import {nth, comparator} from '../introducing-functional-javascript';

describe('nth', () => {
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


describe('comparator', () => {
  const unsortedAry = [100, 1, 0, 10, -1, -2, -1]
  const sortedAsc   = [-2, -1, -1, 0, 1, 10, 100]
  const sortedDesc  = [100, 10, 1, 0, -1, -1, -2]

  it(`Should use predicate for sorting items`), () => {
    unsortedAry.sort(comparator(_.lte)).toEqual(sortedAsc) //ascending order
    unsortedAry.sort(comparator(_.gte)).toEqual(sortedDesc) //descending order
  }

})
