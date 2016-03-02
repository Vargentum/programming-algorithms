'use strict';

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


  return {reverse, factorialize, palindrome, findLongestWord}

}
