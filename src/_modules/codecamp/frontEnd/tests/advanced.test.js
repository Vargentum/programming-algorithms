'use strict';

import {
  telephoneCheck

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


  // describe('', () => {
  //   it(`Should `, () => {
  //     expect().toEqual()
  //   })
  // })

})