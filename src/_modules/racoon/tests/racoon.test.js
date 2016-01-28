'use strict';

import Racoon from '../racoon';

describe('double num', function() {
  let doubleNum = Racoon().doubleNum

  it('Should be defined', () => {
    expect(doubleNum).toBeDefined();
  });

  it('should multiple by two number with no repeating pattern', () => {
    expect(doubleNum(5)).toBe(10)
    expect(doubleNum(444)).toBe(888)
    expect(doubleNum(11211)).toBe(22422)
  })

  it('should return unchangged number with repeating pattern', () => {
    expect(doubleNum(77)).toBe(77)
    expect(doubleNum(2020)).toBe(2020)
    expect(doubleNum(223223)).toBe(223223)
    expect(doubleNum(12301230)).toBe(12301230)
  })

  it('should remove numbers after floating point, and do the same', () => {
    expect(doubleNum(11.4)).toBe(11)
    expect(doubleNum(12.4)).toBe(24)
    expect(doubleNum(121.8)).toBe(242)
  })

  it('should return NaN if non number parameter provided', () => {
    expect(doubleNum(true)).toBeNaN()
    expect(doubleNum([])).toBeNaN()
  })

});
