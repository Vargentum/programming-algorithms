'use strict';

import Algo0 from '../algo0';

describe('Algo0 View', function() {

  const {
    factorialize
   ,palindrome
   ,findLongestWord
   ,titleCase
   ,largestOfFour
   ,end
   ,repeat
   ,truncate
   ,chunk
   ,slasher
   ,mutation} = Algo0()

  it('Should run a few assertions', () => {
    expect(Algo0()).toBeDefined();
  });


  describe('factorialize', () => {
    it('Should factorialize number', () => {
      expect(factorialize(0)).toBe(1)
      expect(factorialize(3)).toBe(1*2*3)
      expect(factorialize(5)).toBe(1*2*3*4*5)
    });
  })


  describe('Palindrome', () => {
    it('Should check if string in reverse order equal to origin string', () => {
      expect(palindrome('Ele’ele')).toBe(true)
      expect(palindrome('1Ele’ele')).toBe(false)
      expect(palindrome('almostomla')).toBe(false)
    });
    it('Should also check phrases. Punctuation, spaces and case should be ignored', () => {
      expect(palindrome('Doc, note, I Dissent. A fast never prevents a fatness. I diet on cod.')).toBe(true)
      expect(palindrome('POW, ami! O’ Gad, ami! Go hang a salami, doc! Note; I dissent. A fast never prevents a fatness. I diet on cod. I’m a lasagna hog. I’m a dago! I’m a wop!')).toBe(true)
      expect(palindrome('1Doc, note, I Dissent. A fast never prevents a fatness. I diet on cod.')).toBe(false)
      expect(palindrome('1POW, ami! O’ Gad, ami! Go hang a salami, doc! Note; I dissent. A fast never prevents a fatness. I diet on cod. I’m a lasagna hog. I’m a dago! I’m a wop!')).toBe(false)
    })
  })
  
  describe('findLongestWord', () => {
    it('Should return the longest word length in integer format', () => {
      expect(findLongestWord('Doc, note, I Dissent. A fast never prevents a fatness. I diet on cod.')).toBe(8)
      expect(findLongestWord('Google do a barrel roll')).toBe(6)
      expect(findLongestWord('')).toBe(0)
    });
  })

  describe('titleCase', () => {
    it('Should capitalize first letter of each word in sentence', () => {
      expect(titleCase('google do a barrel roll')).toBe('Google Do A Barrel Roll')
    });
    it('Should lowercase all other letters', () => {
      expect(titleCase('GOOGLE do a barrel ROLL')).toBe('Google Do A Barrel Roll')
    });
    it("Should correctly handle empty strings", () => {
      expect(titleCase('')).toBe('')
    });
  })

  describe('largestOfFour', () => {
    it('Should return array of largest number for each proven sub array', () => {
      expect(
        largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
      ).toEqual([27,5,39,1001])
    });
  });

  describe('end', () => {
    it('Should check compatibility ending or first argument string with second argument one', () => {
      expect(end("He has to give me a new name", "name")).toBe(true)
      expect(end("He has to give me a new thing", "name")).toBe(false)
    });
    it('Should ignore case', () => {
      expect(end("NAME", "name")).toBe(true)
    });
  });

  describe('repeat', () => {
    it('Should repeat given string N times, when N positive integer provided as second argument', () => {
      expect(repeat("*", 3)).toBe("***")
      expect(repeat("aAa", 2)).toBe("aAaaAa")
    });
    it('Should return empty string, if N is negative', () => {
      expect(repeat("test", -4)).toBe("")
    });
    it('Should return string, if N is 0', () => {
      expect(repeat("test", 0)).toBe("test")
    });
  });

  describe('truncate', () => {
    it('Should truncate string and add ellipsis.', () => {
      expect(truncate("A-tisket a-tasket A green and yellow basket", 11)).toBe("A-tisket...")
      expect(truncate("Peter Piper picked a peck of pickled peppers", 14)).toBe("Peter Piper...")
      expect(truncate("Absolutely Longer", 2)).toBe("Ab...")
      expect(truncate("A-", 1)).toBe("A...")
    });
  });

  describe('chunk', () => {
    it('Should break array into groups of specified size', () => {
      expect(chunk([1,2,3,4], 2)).toEqual([[1,2], [3,4]])
      expect(chunk([1,2,3,4], 3)).toEqual([[1,2,3], [4]])
      expect(chunk([1,2,3,4,5,6], 3)).toEqual([[1,2,3], [4,5,6]])
      expect(chunk([0,1,2,3,4,5], 2)).toEqual([[0,1], [2,3], [4,5]])
    });
  });

  describe('slasher', () => {
    it('Should cropp N items from head of array', () => {
      expect(slasher([1,2,3,4], 2)).toEqual([3,4])
      expect(slasher([1,2,3,4], 0)).toEqual([1,2,3,4])
      expect(slasher([1,2,3,4], 10)).toEqual([])
    });
  });

  describe('mutation', () => {
    it('Should return true if second array item contains all letters from first one', () => {
      expect(mutation(['hello', 'HELLo'])).toBe(true)
      expect(mutation(['Alien', 'line'])).toBe(true)
      expect(mutation(['Mary', 'Army'])).toBe(true)
      expect(mutation(['Mary', 'Aarmy'])).toBe(true)
    });
    it('Should return false overwise', () => {
      expect(mutation(['hello', 'helx'])).toBe(false)
      expect(mutation(['Alien', 'list'])).toBe(false)
    });
  });


  // describe('', () => {
  //   it('Should ', () => {
  //     expect().toEqual()
  //     expect().toBe()
  //   });
  // });
});
