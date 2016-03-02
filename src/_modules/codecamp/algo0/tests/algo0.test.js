'use strict';

import Algo0 from '../algo0';

describe('Algo0 View', function() {

  let {factorialize, palindrome, findLongestWord} = Algo0()

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

});
