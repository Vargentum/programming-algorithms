'use strict';

import {
  telephoneCheck
  ,sym
  ,checkCashRegister
  ,updateInventory
  ,permAlone
  ,makeFriendlyDates
  ,Person

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
    it(`Should return change in coin and bills, sorted in highest to lowest order.`, () => {
      expect(
        checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
      ).toEqual([["QUARTER", 0.50]])
      expect(
        checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
      ).toEqual([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]])
    })
    it(`Should returns the string "Insufficient Funds" if cash-in-drawer is less than the change due. `, () => {
      expect(
        checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
      ).toBe('Insufficient Funds')
      expect(
        checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
      ).toBe('Insufficient Funds')
    })
    it(`Should return the string "Closed" if cash-in-drawer is equal to the change due.`, () => {
      expect(
        checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
      ).toBe('Closed')
    })
  })

  describe('updateInventory', () => {
    it(`Should Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
        Update the current existing inventory item quantities (in arr1). 
        If an item cannot be found, add the new item and quantity into the inventory array.
        The returned inventory array should be in alphabetical order by item.`, () => {
      expect(updateInventory()).toEqual([])
      expect(
        updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
      ).toEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]])
    })
  })

  // describe('permAlone', () => {
  //   it(`Should return the number of total permutations of the provided string that don't have repeated consecutive letters. 
  //       Assume that all characters in the provided string are each unique.`, () => {
  //     expect(permAlone("aab")).toEqual(2)
  //     expect(permAlone("aabb")).toEqual(8)
  //     expect(permAlone("abcdefa")).toEqual(3600)
  //     expect(permAlone("zzzzzz")).toEqual(0)
  //   })
  // })

  describe('makeFriendlyDates', () => {
    it(`Should convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
        The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).`, () => {
      expect(makeFriendlyDates(["2016-07-01", "2018-07-04"])).toEqual(["July 1st, 2016", "July 4th, 2018"])
    })

    it(`Shouldn't display the ending year if the date range ends in less than a year from when it begins.
        Same for month.`, () => {
      expect(makeFriendlyDates(["2016-07-01", "2016-07-04"])).toEqual(["July 1st","4th"])
    })

    it(`If the date range begins in the current year and ends within one year, 
        the year should not be displayed at the beginning of the friendly range.`, () => {
      expect(makeFriendlyDates(["2016-12-01", "2017-02-03"])).toEqual(["December 1st","February 3rd"])
      expect(makeFriendlyDates(["2018-01-13", "2018-01-13"])).toEqual(["January 13th, 2018"])
      expect(makeFriendlyDates(["2022-09-05", "2023-09-04"])).toEqual(["September 5th, 2022","September 4th"])
      expect(makeFriendlyDates(["2022-09-05", "2023-09-05"])).toEqual(["September 5th, 2022","September 5th, 2023"])
    })
  })

  describe('Person class', () => {
    let bob = new Person("Bob Ross")

    it(`Should `, () => {
      expect(Object.keys(bob).length).toBe(6)
      expect(bob instanceof Person).toBe(true)
      expect(bob.getFullName()).toBe("Bob Ross")
    })
  })

  // describe('', () => {
  //   it(`Should `, () => {
  //     expect().toEqual()
  //   })
  // })

})