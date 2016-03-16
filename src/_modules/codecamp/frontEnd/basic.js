'use strict';

import {mapWith, compose} from '../../js-allonge/unsorted/unsorted'

export default function () {
  const filterPunctuation = str => str.replace(/[^0-9a-z]/gi, '')

  const reverse = function reverse(str) {
    return str
      .split('')
      .reverse()
      .join('')
  }

  const factorialize = function factorialize (num) {
    if (!num) return 1
    else return num * factorialize(num - 1)
  }

  const palindrome = function palindrome (str) {
    let getRawChars = str => filterPunctuation(str).toLowerCase()
    return getRawChars(str) === getRawChars(reverse(str))
  }

  const findLongestWord = function findLongestWord (str) {
    let sorted = str
      .split(' ')
      .map(filterPunctuation)
      .sort((a, b) => b.length - a.length)
    return sorted[0] ? sorted[0].length : 0
  }

  const titleCase = function titleCase (str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(w => {
        let firstLetter = w.length ? w[0].toUpperCase() : ''
        return w.replace(/^./, firstLetter)
      })
      .join(' ')
  }

  const getLargestNum = (arr) => arr.reduce((p, n) => p > n ? p : n)
  const largestOfFour = mapWith(getLargestNum)

  const end = function end(str, ending) {
    return new RegExp(`${ending}$`, 'gi').test(str)
  }

  const repeat = function repeat(str, times) {
    if (times > 0) {
      return new Array(times+1).join(str)
    }
    else if (times < 0) {
      return ''
    }
    else {
      return str
    }
  }

  const truncate = function trunkate(str, limit, ending = '...') {
    if (str.length <= limit) return str
    return str
      .split('')
      .slice(0, limit > ending.length ? limit - ending.length : limit)
      .concat([ending])
      .join('')
  }

  const chunk = function chunk (arr, size) {
    let result = []
    let i = 0
    while(true) {
      if (i > arr.length - 1) return result
      result.push(arr.slice(i, i+size))
      i += size
    }
  }

  const slasher = function slasher(arr, startPoint) {
    return arr.slice(startPoint)
  }

  const mutation = function mutation([orig, test]) {
    let [lOrig, lTest] = [orig, test].map(x => x.toLowerCase())
    return !lTest
      .split('')
      .filter(x => lOrig.indexOf(x) === -1)
      .length
  }

  const bouncer = function bouncer(arr) {
    return arr.filter(x => !!x)
  }

  const destroyer = function destroyer (arr, ...toRemove) {
    return arr.filter(x => toRemove.indexOf(x) === -1)
  }

  const where = function where (arr, val) {
    return arr
      .concat([val])
      .sort((a,b) => a - b)
      .indexOf(val)
  }

  const rot13 = function rot13(str) {
    const ciphedChars = {start: 65, end: 90} //from A to Z
    const shift = 13
    const {start, end} = ciphedChars
    let getChiphedFrom = (n) => {
      return n + shift > end 
        ? n + shift - end + start - 1
        : n + shift
    }
    return str
      .split('')
      .map(x => {
        let code = x.charCodeAt(0)
        return code >= start && code <= end 
          ? String.fromCharCode(getChiphedFrom(code))
          : x
      })
      .join('')
  }


  return {
    reverse
   ,factorialize
   ,palindrome
   ,findLongestWord
   ,titleCase
   ,largestOfFour
   ,end
   ,repeat
   ,truncate
   ,chunk
   ,slasher
   ,mutation
   ,bouncer
   ,destroyer
   ,where
   ,rot13
  }
}
