import _ from 'lodash'
import findHourglassesSum from './arrays/02.2d-arrays.js'
import {makeRotationLeft, makeRotationRight} from './arrays/04.left-rotation.js'

/* -----------------------------
  02.
----------------------------- */

describe(`findHourglassesSum`, () => {
  const value = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  const actual = findHourglassesSum(value)
  const expected = 20

  it(`should return sum of numbers from 'hourglass patterns'`, () => {
    expect(actual).toEqual(expected)
  })
})



/* -----------------------------
  04.
----------------------------- */

describe(`makeRotation`, () => {
  const value = [1,2,3,4,5]
  const check = (fn, src) => _.forEach(src, (exp, rotQ) => {
    expect(fn(value.length, Number(rotQ), value)).toEqual(exp)
  })

  describe(`left order`, () => {
    const expected = {
      "232": [3,4,5,1,2],
      "149": [5,1,2,3,4],
      "145": value
    }
    it(`should return sum of numbers from 'hourglass patterns'`, () => {
      check(makeRotationLeft, expected)
    })
  })

  describe(`right order`, () => {
    const expected = {
      "232": [4,5,1,2,3],
      "149": [2,3,4,5,1],
      "145": value
    }
    it(`should return sum of numbers from 'hourglass patterns'`, () => {
      check(makeRotationRight, expected)
    })
  })

  
})
