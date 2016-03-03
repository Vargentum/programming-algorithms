'use strict';

export default (function () {

  // DECORATOR examples



  // 1. compose

  const reverse = str => str.split('').reverse().join('')
  const simplify = str => str.replace(/[^0-9a-z]/gi, '').toLowerCase()

  const compose = (a, b) => (c) => a(b(c))
  const simplifiedReverse = compose(reverse, simplify)

  // console.log(simplifiedReverse('Doc, note,')) //etoncod




  // 2. mapWith

  const mapWith = (fn) => (array) => array.map(fn)
  const squareArray = mapWith(n => n * 2)

  // console.log(squareArray([1,2,3])) // [2,4,6]





  // Fat arrow scope

  const scopeOuter = function() {
    return mapWith((cell) => cell * arguments[0])([1,2,3,4,5])
  }

  const scopeInner = function() {
    return mapWith(function (cell) { return cell * arguments[0]})([1,2,3,4,5])
  }

  // console.log(scopeOuter(5)) // [5,10,15,20,25]  //cell * 5
  // console.log(scopeInner(3)) // [2,4,6,8,10]  //cell * cell


  return{compose, mapWith}
}())