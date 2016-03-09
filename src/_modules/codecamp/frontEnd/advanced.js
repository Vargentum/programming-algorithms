'use strict';


export default function() {

  const sumAll = function sumAll(arr) {
    let [start, end] = arr.sort((a,b) => a - b)
    let result = 0
    for (let i = start; i <= end; i++) {
       result += i
    }
    return result
  }

  const diff = function diff (a1, a2) {
    return [].concat(
      a1.filter(x => a2.indexOf(x) === -1),
      a2.filter(x => a1.indexOf(x) === -1)
    )
  }

  return {
    sumAll,
    diff
  }
}