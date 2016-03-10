'use strict';

import AdvancedAlgorhitms from '../advanced';

describe('Advanced Algorithms', () => {

  const {
    sumAll
    ,diff
    ,convert
    ,where
    ,myReplace

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

  describe('convert', () => {

    it('Should correctly convert basic Roman discharge', () => {
      expect(convert(1)).toBe('I')
      expect(convert(5)).toBe('V')
      expect(convert(10)).toBe('X')
      expect(convert(50)).toBe('L')
      expect(convert(100)).toBe('C')
      expect(convert(500)).toBe('D')
      expect(convert(1000)).toBe('M')
    });
    
    it('Should properly add discharges', () => {
      expect(convert(3)).toBe('III')
      expect(convert(2000)).toBe('MM')
    });
    
    it('Should properly add different discharges', () => {
      expect(convert(8)).toBe('VIII')
      expect(convert(357)).toBe('CCCLVII')
      expect(convert(1394)).toBe('MCCCXCIV')
    });
    it('Should properly distract different discharges', () => {
      expect(convert(9)).toBe('IX')
      expect(convert(444)).toBe('CDXLIV')
    });
  });



  describe('where', () => {
    it('Should filter collection by providen key/value pair', () => {
      expect(where(
        [
          {name: "Vlad", age:22},
          {name: "Tom", age:56}
        ],
        {name: "Vlad"}
        )).toEqual([{name: "Vlad", age:22}])
      expect(
        where(
          [
            { "a": 1, "b": 2 },
            { "a": 1 },
            { "a": 1, "b": 2, "c": 2 }
          ], 
          { "a": 1, "b": 2 })).toEqual(
            [
              { "a": 1, "b": 2 },
              { "a": 1, "b": 2, "c": 2 }
            ]
          )
    });
  });

  describe('myReplace', () => {
    it('Should find and replace words in providen string', () => {
      expect(
        myReplace("This has a spellngi error", "spellngi", "spelling")
      ).toEqual("This has a spelling error")
    });
    it('Should precerve case in replaced words', () => {
      expect(
        myReplace("His name is Tom", "Tom", "john")
      ).toEqual("His name is John")
    });
  });

  // describe('', () => {
  //   it('Should ', () => {
  //     expect().toEqual()
  //   });
  // });
})