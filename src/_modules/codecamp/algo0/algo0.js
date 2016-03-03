'use strict';

import {mapWith} from '../../js-allonge/unsorted/unsorted'


export default function Algo0 () {
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
    let simplify = str => filterPunctuation(str).toLowerCase()
    return simplify(str) === simplify(reverse(str))
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

  return {reverse, factorialize, palindrome, findLongestWord, titleCase, largestOfFour, end, repeat, truncate, chunk}
}
