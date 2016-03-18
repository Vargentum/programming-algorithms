'use strict';

import {
  telephoneCheck
  ,sym
  ,checkCashRegister

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

  describe('checkCashRegister', () => {
    // it(`Syould return change in coin and bills, sorted in highest to lowest order.`, () => {
    //   expect(
    //     checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
    //   ).toEqual([["QUARTER", 0.50]])
    // })
    it(`Should returns the string "Insufficient Funds" if cash-in-drawer is less than the change due. `, () => {
      expect(
        checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
      ).toBe('Insufficied funds')
    })
    // it(`Should return the string "Closed" if cash-in-drawer is equal to the change due.`, () => {
    //   expect(
    //     checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
    //   ).toBe('Closed')
    // })
  })

  // describe('', () => {
  //   it(`Should `, () => {
  //     expect().toEqual()
  //   })
  // })

})