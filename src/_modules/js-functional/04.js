'use strict';
import _ from 'lodash'

/*
best HOC: 
  returns 

  best:: (pred, coll) => value `best` to predicate
*/

const integers = [1,2,3,4,5]

console.log(_.max(integers)) // 5


const best = (pred, coll) =>
  coll.reduce((p,n) => 
    pred(p, n) ? p : n
  )


describe(`best`, () => {
  const actual = best((a,b) => a > b), integers)

  it(`should return 'best' value`, () => {
    expect(actual).toEqual(5);
    expect(actual).toEqual(_.max(integers));
  });
});

