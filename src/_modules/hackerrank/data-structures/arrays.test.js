import _ from 'lodash'
import findHourglassesSum from './arrays/02.2d-arrays.js'
import {parseInput, parseOutput, makeRotationLeft, makeRotationRight} from './arrays/04.left-rotation.js'
import * as module5 from './arrays/05.sparse-arrays.js'

/* -----------------------------
  02.
----------------------------- */

describe(`findHourglassesSum`, () => {
  const v2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
  ]

  it(`should return sum of numbers of max hourglass`, () => {
    expect(findHourglassesSum(v2)).toEqual(13)
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

  describe(`raw left order`, () => {
    const input = `5 4
1 2 3 4 5`
    const actual = parseOutput(makeRotationLeft(...parseInput(input)))
    const expected = '5 1 2 3 4'
  
    it(`should work with string Input and produce string Output`, () => {
      expect(actual).toEqual(expected)
    })
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



/* -----------------------------
  05.
----------------------------- */
describe(`findString`, () => {
  const {parseInput, parseOutput, findString} = module5

  it(`should detect occurrence for each query in strings`, () => {
      const input = `4
aba
baba
aba
xzxb
3
aba
xzxb
ab`
  const output = `2
1
0`
  const result = parseOutput(findString.apply(null, parseInput(input)))
    expect(result).toEqual(output)
  })
})




/* -----------------------------
  Memoize

  1. function should be pure,
  2. function's first parameter should be string ()
----------------------------- */
function memoize(fn) {
  const cache = {}
  return function(val) {
    if (!cache[val]) cache[val] = fn(val)
    return cache[val]
  }
}

describe(`memoize`, () => {
  const heavyFn = (a) => a * 3
  const memoizedHeavyFn = memoize(heavyFn)

  memoizedHeavyFn(2)
  memoizedHeavyFn(3)
  memoizedHeavyFn(2) // shouldn't be calculated
  memoizedHeavyFn(2) // shouldn't be calculated

  // it(``, () => {
  //   expect(actual).to.equal(expected)
  // })
})

