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




