'use strict';

import {
  telephoneCheck
  ,sym

} from '../advanced'


describe('Advanced CodeCamp JS Algorhitms', () => {


  describe('telephoneCheck', () => {
    let valid = [
      '555-555-5555',
      '(555)555-5555',
      '(555) 555-5555',
      '555 555 5555',
      '5555555555',
      '1 555 555 5555'
    ]
    let invalid = [
      '123**&!!asdf#',
      '2(757)622-7382',
      '(555-555-5555',
      '10 (757) 622-7382',
      '0 (757) 622-7382',
      '123**&!!asdf#',
      '55555555',
      '27576227382',
      '2(757)6227382'
    ]

    it(`Should check passed string to equal valid US phone number`, () => {
      valid.forEach(n => expect(telephoneCheck(n)).toBe(true))
      invalid.forEach(n => expect(telephoneCheck(n)).toBe(false))
    })
  })


  describe('sym', () => {
    it(`Should return the symmetric difference of providen arrays, sorted in ascending order`, () => {
      expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3,4,5])
      expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([2, 3, 4, 6, 7])
      expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toEqual([1, 2, 4, 5, 6, 7, 8, 9])
      expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5])
    })
  })

  // describe('', () => {
  //   it(`Should `, () => {
  //     expect().toEqual()
  //   })
  // })

})