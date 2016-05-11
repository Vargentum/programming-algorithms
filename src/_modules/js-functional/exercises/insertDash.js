import _ from 'lodash'

export const debug = (val) => {
  console.log(val)
  debugger
  return val
}

const cleanJoin = (ary) => ary.join('')
const isOdd = (x) => x % 2 !== 0
const isPairOdd = (x, y) => isOdd(x) && isOdd(y)

const interposeBy = (divider, predicate) => 
  (x,i,ary) => x && ary[i+1] && predicate(x, ary[i+1]) 
    ? x + divider
    : x

const insertDash = (num) => _(_.toString(num))
  .map(interposeBy('-', isPairOdd))
  .thru(cleanJoin)
  .value()

export default insertDash

// Test.assertEquals(insertDash(454793),'4547-9-3');
// Test.assertEquals(insertDash(123456),'123456');
// Test.assertEquals(insertDash(1003567),'1003-567');