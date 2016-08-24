import _ from 'lodash'

/* -----------------------------
  Dispatch 
----------------------------- */
function dispatch (...fns) {
  return (...args) => {
    var ret
    for (let i = 0; i < fns.length; i++) {
      ret = fns[i].apply(null, args)
      if (ret) break
    }
    return ret
  }
}

describe(`Dispatch`, () => {
  const stringRev = (str) => _.isString(str) && str.split('').reverse().join('')
  const aryRew = (ary) => _.isArray(ary) && ary.reverse() //weird problem with Array.prototype.reverse
  
  it(`should apply functions until result become truthy and then return it`, () => {
    const rev = dispatch(stringRev, aryRew)
    expect(rev([1,2,3])).toEqual([3,2,1]);
    expect(rev('123')).toEqual('321');
  });

  it(`alow to provide default behavior`, () => {
    const rev = dispatch(stringRev, aryRew, () => {throw 'Incorrect arguments'})
    // expect(rev({})).toThrow('Incorrect arguments');
  });
});

