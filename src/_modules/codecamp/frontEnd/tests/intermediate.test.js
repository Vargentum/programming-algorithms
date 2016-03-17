'use strict';

import IntermediateAlgorhitms from '../intermediate';

describe('Advanced Algorithms', () => {

  const {
    sumAll
    ,diff
    ,convert
    ,where
    ,myReplace
    ,translate
    ,pair
    ,fearNotLetter
    ,boo
    ,unite
    ,sanitize
    ,spinalCase
    ,sumFibs
    ,sumPrimes
    ,smallestCommons
    ,find
    ,drop
    ,steamroller
    ,binaryAgent
    ,every
    ,add

  } = IntermediateAlgorhitms()

  it('Should be defined', () => {
    expect(IntermediateAlgorhitms()).toBeDefined();
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

  describe('translate', () => {
    it('Should remove all consolants from begining, add them to end with "ay" ending', () => {
      expect(translate('glove')).toEqual('oveglay')
      expect(translate('paragraphs')).toEqual('aragraphspay')
    });

    it('Should add "way" ending, if word begins with a wowel', () => {
      expect(translate('algorithm')).toEqual('algorithmway')
      expect(translate('eight')).toEqual('eightway')
    })

  });

  describe('pair', () => {
    it('Should pair DNA nucleines', () => {
      expect(pair('CGC')).toEqual([['C', 'G'], ['G', 'C'], ['C', 'G']])
      expect(pair('TCAG')).toEqual([['T', 'A'], ['C', 'G'], ['A', 'T'], ['G', 'C']])
    });
  });

  describe('fearNotLetter', () => {
    it('Should compare string with alphabet and return the missing letters', () => {
      expect(fearNotLetter('abd')).toEqual('c')
      expect(fearNotLetter('qrsuv')).toEqual('t')
      expect(fearNotLetter('dghi')).toEqual('ef')
    });
    it('Should return undefined, if all string letters goes in alphabet order', () => {
      expect(fearNotLetter('abc')).not.toBeDefined()
      expect(fearNotLetter('xy')).not.toBeDefined()
      expect(fearNotLetter('opqrst')).not.toBeDefined()
    });
  });

  describe('boo', () => {
    it('Should return true if tested value has boolean type. Return false overwise', () => {
      expect(boo(true)).toEqual(true)
      expect(boo(false)).toEqual(true)
      expect(boo('true')).toEqual(false)
      expect(boo('false')).toEqual(false)
    });
  });

  describe('unite', () => {
    it('Should return union of unique values from all proven arrays in their order', () => {
      expect(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1,3,2,5,4])
      expect(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1,2,3,5,4,6,7,8])
    });
  });


  describe('sanitize', () => {
    it(`Should escape < > & " ' characters to their html form`, () => {
      expect(sanitize("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana")
      expect(sanitize(`escape < > & " '`)).toEqual(`escape &lt; &gt; &amp; &quot; &apos;`)
      expect(sanitize(`normal string`)).toEqual(`normal string`)
    });
  });

  describe('spinalCase', () => {
    it(`Should convert words, camelCase and underscore_case to spinal-case`, () => {
      expect(spinalCase('This Is Spinal Tap!')).toEqual('this-is-spinal-tap')
      expect(spinalCase('The_Andy_Griffith_Show?:')).toEqual('the-andy-griffith-show')
      expect(spinalCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap')
    });
  });

  describe('sumFibs', () => {
    it(`Should sum all odd numbers up to and including the passed number if it's a Fibonacci number`, () => {
      expect(sumFibs(1)).toEqual(jasmine.any(Number))
      expect(sumFibs(4)).toEqual(5)
      expect(sumFibs(1000)).toEqual(1785)
      expect(sumFibs(4000000)).toEqual(4613732)
    });
  });

  describe('sumPrimes', () => {
    it(`Should sum all prime numbers up to and including th provided number`, () => {
      expect(sumPrimes(10)).toEqual(17)
      expect(sumPrimes(977)).toEqual(73156)
    });
  });

  describe('smallestCommons', () => {
    it(`Should find the smallest multiple that evenly divided by each number in provided range`, () => {
      expect(smallestCommons([1,5])).toEqual(60)
      expect(smallestCommons([5,1])).toEqual(60)
      expect(smallestCommons([1,13])).toEqual(360360)
    });
  });

  describe('find & drop', () => {
    const isEven = x => x % 2 === 0
    const isOdd = x => x % 2 !== 0

    describe('find', () => {
      it(`Should find the first element in providen array that passes a test function`, () => {
        expect(find([1,2,3], isEven)).toEqual(2)
        expect(find([1,2,3], isOdd)).toEqual(1)
      });
      it(`Should return undefined if nothing passes the predicate function`, () => {
        expect(find([2,4], isOdd)).not.toBeDefined()
      });
    });

    describe('drop', () => {
      it(`Should drop items from array, when predicate returns true`, () => {
        expect(drop([2,4,6,10,3,4,6], isOdd)).toEqual([3,4,6])
        expect(drop([1,2,4], isOdd)).toEqual([1,2,4])
      });
      it(`Should return empty array if all items passes the predicate truthly`, () => {
        expect(drop([2,4,6,10,4,4,6], isOdd)).toEqual([])
        expect(drop([1,3,17], isEven)).toEqual([])
      });
    });
  })

  describe('steamroller', () => {
    it(`Should flatten multiple depth array into single-depth one`, () => {
      expect(steamroller([[1,2],[3,[4,5,[6]]]])).toEqual([1,2,3,4,5,6])
    });
  });

  describe('binaryAgent', () => {
    it(`Should convert binary string into English. Input will be space separated`, () => {
      expect(
        binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
      ).toEqual("Aren't bonfires fun!?")
    });
  });

  describe('every', () => {
    let babies1 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]
    let babies2 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]
    
    it(`Should check if given predicate is truthy for all elements in collection`, () => {
      expect(every(babies1, 'sex')).toBeTruthy()
      expect(every(babies2, 'sex')).not.toBeTruthy()
    });
  });

  describe('add', () => {
    it(`Should sum arguments if 2 provided`, () => {
      expect(add(5,2)).toBe(7)
    });
    it(`Should expect for next argument if only one supplied`, () => {
      expect(add(5)(2)).toBe(7)
    });
    it(`Should return undefined if some arguments isn't number`, () => {
      expect(add('test')).not.toBeDefined()
      expect(add(5)('2')).not.toBeDefined()
    });
  });

  // describe('', () => {
  //   it(`Should `, () => {
  //     expect().toEqual()
  //   });
  // });
})