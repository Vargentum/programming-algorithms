'use strict';

import AdvancedAlgorhitms from '../advanced';

describe('Advanced Algorithms', () => {

  const {
    sumAll,
    diff

  } = AdvancedAlgorhitms()

  it('Should be defined', () => {
    expect(AdvancedAlgorhitms()).toBeDefined();
  });

  describe('sumAll', () => {
    it('Should sum integers from first element of providen array to second', () => {
      expect(sumAll([1,5])).toBe(1 + 2 + 3 + 4 + 5)
      expect(sumAll([5,1])).toBe(1 + 2 + 3 + 4 + 5)
      expect(sumAll([2,-1])).toBe(2 + 1 + 0 + -1)
    });
  });

  describe('diff', () => {
    it('Should return an array containing the symmetric differece for both providen arrays', () => {
      expect(diff([1,2],[2,3])).toEqual([1,3])
      expect(diff([1,2],[2,1])).toEqual([])
      expect(diff([4,1],[4,0,0])).toEqual([1,0,0])
      expect(diff([0,false, undefined],[undefined,false,'test',0,12])).toEqual(['test', 12])
    });
  });

  // describe('', () => {
  //   it('Should ', () => {
  //     expect().toEqual()
  //     expect().toBe()
  //   });
  // });

})