// 'use strict';
import maxSubarraySum from './maxSubarraySum';
import _ from 'lodash'

describe('maxSubarraySum', function() {
  describe(`corner cases`, () => {
    it(`should return 0, if empty array supplied`, () => {
      expect(maxSubarraySum([])).toBe(0);
    });
    it(`should return 0, if only negative numbers present in array`, () => {
      expect(maxSubarraySum([-1, -2, -3])).toBe(0);
      expect(maxSubarraySum([-1, -2, -3, 0])).toBe(0);
    });
    it(`should return sum of all items in array, if no negative numbers proven`, () => {
      expect(maxSubarraySum([1,2,3,4,5])).toBe(1+2+3+4+5);
    });
  })

  describe(`other cases`, () => {
    it(`should work`, () => {
      expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    })
  })
});
