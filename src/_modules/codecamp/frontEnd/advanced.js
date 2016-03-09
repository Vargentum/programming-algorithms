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

  const convert = function convert(num) {
    const digitsMap = {
      M: 1000
      ,D: 500
      ,C: 100
      ,L: 50
      ,X: 10
      ,V: 5
      ,I: 1
    }
    let integers = []
       ,romans = []

    for (let d in digitsMap) {
      integers.push(digitsMap[d])
      romans.push(d)
    }
    return num
      .toString()
      .split('')
      .map((x, i, a) => parseInt(x) * Math.pow(10, a.length - 1 - i))
      .reduce((p,n) => {
        p += integers.reduce((p1,d,i,a) => {
          while (n >= d) {
            if (n === a[i-1] - a[i+1]) { //9
              n -= a[i-1] - a[i+1]
              p1 += romans[i+1] + romans[i-1]
            }
            else if (n === d * 4) { //4
              n -= d * 4
              p1 += romans[i] + romans[i-1]
            }
            else {
              n -= d
              p1 += romans[i]
            }
            if (n < d) break
          }
          return p1
        }, '')
        return p
      }, '')
  }

  const where = function where(coll, pred) {
    return coll.filter(entry => {
      return Object
        .keys(pred)
        .every(key => entry[key] && entry[key] === pred[key])
    })
  }


  return {
    sumAll
    ,diff
    ,convert
    ,where
  }
}