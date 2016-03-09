'use strict';

import AdvancedAlgorhitms from '../advanced';

describe('Advanced Algorithms', () => {

  const {
    sumAll

  } = AdvancedAlgorhitms()

  it('Should be defined', () => {
    expect(AdvancedAlgorhitms()).toBeDefined();
  });

  describe('sumAll', () => {
    it('Should sum integers from first element of providen array to second', () => {
      expect(sumAll([1,5])).toEqual(1 + 2 + 3 + 4 + 5)
      expect(sumAll([5,1])).toEqual(1 + 2 + 3 + 4 + 5)
      expect(sumAll([2,-1])).toBe(2 + 1 + 0 + -1)
    });
  });

  // describe('', () => {
  //   it('Should ', () => {
  //     expect().toEqual()
  //     expect().toBe()
  //   });
  // });

})