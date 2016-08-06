'use strict';
import _ from 'lodash'

/*
best HOC: 
  returns 

  best:: (pred, coll) => value `best occured to` predicate
*/

let integers = [1,2,3,4,5]

const best = (pred, coll) =>
  coll.reduce((p,n) => 
    pred(p, n) ? p : n
  )

describe(`best`, () => {
  const actual = best((a,b) => a > b, integers)

  it(`should return 'best' value`, () => {
    expect(actual).toEqual(5);
    expect(actual).toEqual(_.max(integers));
  });
});




/*
repeat

Use functions not values!
Power of functional approach: `repeatedly` allows `repetition` for any values

*/
const repeat = (times, value) =>
  _.map(_.range(times), () => value)


// MORE generic repetition: avoid `value`
const repeatedly = (times, fn) =>
  _.map(_.range(times), fn)


// MORE generic repetition: avoid `times`

const iterateUntil = (fn, check, initVal) => {
  const total = []
  let result = fn(initVal)

  while(check(result)) {
    total.push(result)
    result = fn(result)
  }

  return total
}

/*
iterateUntil is feed-forward function
*/

describe(`repetition`, () => {

  it(`repeatedly should work`, () => {
    const repeatClone = (times, value) => repeatedly(times, () => value)
    const args = [3, 'test']
    expect(repeat(...args)).toEqual(repeatClone(...args));
  });

  it(`iterdateUntil should be fully generic`, () => {
    const progression = iterateUntil(
      a => a * 2, 
      a => a < 10000, 
      1 
    )
    expect(progression).toEqual([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]);
    // you can't do this with repeatedly, because you should know the iteration quantity
  });
});


/* -----------------------------
  Fnull hoc
----------------------------- */
function fnull (fn, ...defaults) {
  return (...args) => {
    const fullArgs = _.map(args, (a,i) => a || defaults[i])
    return fn(...fullArgs)
  }
}

// describe(`fnull`, () => {
//   it(`should replace falsy values with provided defaults`, () => {
//     //you should know the index of `falsey` occuring. problem??
//   });
// });


/* -----------------------------
  check
----------------------------- */
function validate(...checks) {
  return (src) =>
    _.reduce(checks, (err, {check, message}) => {
      return check(src)
        ? err
        : err.concat([message])
    }, [])
}

describe(`validate `, () => {
  const checkNum = {check: _.isNumber, message: 'should be a number'}
  const checkAry = {check: _.isArray, message: 'should be an array'}
  const nums = [1,3]
  it(`should validate in map`, () => {
    expect(_.map(nums, validate(checkAry))).toEqual(_.map(nums, () => ['should be an array']))
    expect(_.map(nums, validate(checkNum))).toEqual(repeat(nums.length, []))
  });
  it(`should validate `, () => {
    const checker = validate(checkAry)
    expect(checker(34)).toEqual([checkAry.message])
    expect(checker(['foo', 'bar'])).toEqual([])
  });
});


// function hasKeys(...keys) {
//   return (src) => 
// }