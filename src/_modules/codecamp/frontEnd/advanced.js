'use strict';

const compose = (...fns) => (val) => fns.reduce((p,n) => n.call(p, p), val)
const sum = (a) => a.reduce((p,n) => p+=n, 0)

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

  const myReplace = function myReplace(str, toFind, toReplace) {
    let isUppercased = (char) => char !== "" && char.toUpperCase() === char
    let equalizeCase = (src, orig) => {
      return src
        .split('')
        .map((x, i) => isUppercased(orig.charAt(i)) ? x.toUpperCase() : x)
        .join('')
    }
    return str.replace(toFind, equalizeCase(toReplace, toFind))
  }

  const translate = function translate(str) {
    const consonants = 'BCDFGHJKLMNPQRSTVXZ'
    const vowels = 'AEIOUY'
    const ending = {
      consonants: 'ay',
      vowels: 'way'
    }
    let isVowelAtStart = (str) => {
      return vowels
        .toLowerCase()
        .indexOf(str.charAt(0).toLowerCase()) !== -1
    }
    return isVowelAtStart(str) ? 
      str + ending.vowels
      :
      str.replace(
        new RegExp(`(^[${consonants}]+)(.*)`, 'i')
        , `$2$1${ending.consonants}`)
  }

  const pair = function pair(str) {
    const nucleines = {
      base: "TCAG",
      opposite: "AGTC"
    }
    return str
      .split('')
      .map(x => {
        let idx = nucleines.base.indexOf(x)
        return [x, nucleines.opposite.charAt(idx)]  
      })
  }

  const fearNotLetter = function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return alphabet
      .split('')
      .slice(
        alphabet.indexOf(str[0]),
        alphabet.indexOf(str[str.length - 1]) + 1
      )
      .reduce((p, n) => {
        if (str.indexOf(n) === -1) {
          p ? p += n : p = n
        }
        return p
      }, undefined)
  }

  const boo = function boo(val) {
    return typeof val === 'boolean'
  }

  const unite = function unite(...arrays) {
    return arrays.reduce((p, n) => {
      return p.concat(n.filter(x => !p[x]))
    },[])  
  }

  const sanitize = function sanitize(str) {
    const symbols = {
      lt: '<',
      gt: '>',
      quot: `"`,
      apos: `'`,
      amp: '&' // need custom logic for avoiding problem of repetitive matchings & at already sanitized string
    }
    let symbolsEscaped = []
      , symbolsRaw = []

    Object.keys(symbols).forEach(key => {
      symbolsEscaped.push(`&${key};`)
      symbolsRaw.push(symbols[key])
    })
    let searchPtrn = new RegExp(
      symbolsRaw
        .filter(x => x !== symbols.amp)
        .join('|') 
    , 'gi')

    let result
      , getEscapedFormOf = (rawSymbol) => symbolsEscaped[symbolsRaw.indexOf(rawSymbol)]
      , sanitizeSymbolType = (ptrn, symbol = ptrn) => {
        return str.replace(new RegExp(ptrn, 'g'), getEscapedFormOf(symbol))
      }  
    str = sanitizeSymbolType(`\\${symbols.amp}`, symbols.amp)
    while ((result = searchPtrn.exec(str)) !== null) {
      str = sanitizeSymbolType(result[0])
    }
    return str
  }

  const spinalCase = function spinalCase (str) {
    let removePunctuation = s => s.replace(/[^0-9a-z\-]/g, '')
    let convertUnderscoresAndSpaces = s => s.replace(/_|\s/g, '-')
    let convertCamel = s => s.replace(/([^-])([A-Z])/g, '$1-$2')
    return compose(
      convertUnderscoresAndSpaces,
      convertCamel,
      String.prototype.toLowerCase,
      removePunctuation
    )(str)
  }

  const sumFibs = function sumFibs (num) {
    let getSumOf = (arr,idx) => sum(arr.slice(idx))
    let genFibs = (limit) => {
      let result = [0,1]
        , nextFib = null
      while ((nextFib = getSumOf(result, -2)) <= limit) {
        result.push(nextFib)
      }
      return result
    }
    return sum(genFibs(num).filter(x => x % 2 !== 0))
  }

  const sumPrimes = function sumPrimes (num) {
    const firstPrime = 2
    let isPrime = n => {
      for (let j = firstPrime; j <= n/2; j++) {
        if (n % j === 0) return false
      }
      return true
    }
    let genPrimes = (limit) => {
      let result = []
      for (let i = firstPrime; i <= limit; i++) {
        if (isPrime(i)) {
          result.push(i)
        }
      }
      return result
    }
    return sum(genPrimes(num))
  }


  return {
    sumAll
    ,diff
    ,convert
    ,where
    ,myReplace
    ,translate
    ,pair
    ,fearNotLetter
    ,boo
    ,unite
    ,sanitize
    ,spinalCase
    ,sumFibs
    ,sumPrimes
  }
}