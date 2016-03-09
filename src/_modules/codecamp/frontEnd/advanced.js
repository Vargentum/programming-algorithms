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


  return {
    sumAll
  }
}