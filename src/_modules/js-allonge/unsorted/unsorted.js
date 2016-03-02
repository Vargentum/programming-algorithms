'use strict';

export default () => {

  // DECORATOR examples



  // 1. compose

  let reverse = str => str.split('').reverse().join('')
  let simplify = str => str.replace(/[^0-9a-z]/gi, '').toLowerCase()

  let compose = (a, b) => (c) => a(b(c))
  let simplifiedReverse = compose(reverse, simplify)

  console.log(simplifiedReverse('Doc, note,')) //etoncod




  // 2. mapWith

  let mapWith = (fn) => (array) => array.map(fn)
  let squareArray = mapWith(n => n * 2)

  console.log(squareArray([1,2,3])) // [2,4,6]





  // Fat arrow scope

  let scopeOuter = function() {
    return mapWith((cell) => cell * arguments[0])([1,2,3,4,5])
  }

  let scopeInner = function() {
    return mapWith(function (cell) { return cell * arguments[0]})([1,2,3,4,5])
  }

  console.log(scopeOuter(5)) // [5,10,15,20,25]  //cell * 5
  console.log(scopeInner(3)) // [2,4,6,8,10]  //cell * cell



}