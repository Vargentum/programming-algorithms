'use strict';
import Unsorted from '../unsorted';
const {factorialOptimized} = Unsorted

describe('Unsorted View', function() {
  it('Should run a few assertions', () => {
    expect(factorialOptimized(3)).toBe(1 * 2 * 3)
    expect(factorialOptimized(5)).toBe(1 * 2 * 3 * 4 * 5)
  });
});
