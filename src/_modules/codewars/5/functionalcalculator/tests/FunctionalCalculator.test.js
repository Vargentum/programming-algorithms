// 'use strict';

import {Operands, Operators} from '../FunctionalCalculator';
import _ from 'lodash'

describe('Functions Calculator', function() {
  const {zero, one, two, three, four, five, six, seven, eight, nine} = Operands
  const {plus, minus, times, dividedBy} = Operators

  it('should proper add numbers', () => {
    expect(zero(plus(one()))).toBe(0 + 1)
    expect(two(plus(three()))).toBe(2 + 3)
    expect(three(plus(three()))).toBe(3 + 3)
  });

  it('should proper substract numbers', () => {
    expect(four(minus(five()))).toBe(4 - 5)
    expect(six(minus(five()))).toBe(6 - 5)
    expect(three(minus(three()))).toBe(3 - 3)
  });

  it('should proper multiply numbers', () => {
    expect(seven(times(eight()))).toBe(7 * 8)
    expect(eight(times(three()))).toBe(8 * 3)
    expect(nine(times(four()))).toBe(9 * 4)
  });

  it('should proper divide numbers', () => {
    expect(zero(dividedBy(one()))).toBe(0 / 1)
    expect(two(dividedBy(three()))).toBe(2 / 3)
    expect(three(dividedBy(three()))).toBe(3 / 3)
  });

});
