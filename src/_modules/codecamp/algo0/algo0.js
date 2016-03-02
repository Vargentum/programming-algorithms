'use strict';

export default function Algo0 () {

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
    let simplify = str => str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    return simplify(str) === simplify(reverse(str))
  }


  return {reverse, factorialize, palindrome}

}
